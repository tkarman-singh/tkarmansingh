import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Zod schema for input validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  // Honeypot field - must be empty
  website: z.string().max(0, "Invalid submission").optional(),
});

// Simple in-memory rate limiting (in a real app, use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    // In App router, we get IP from headers if running on Vercel
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    
    if (ip !== "unknown") {
      const rateLimitInfo = rateLimitMap.get(ip);
      if (rateLimitInfo) {
        if (now - rateLimitInfo.timestamp < RATE_LIMIT_DURATION) {
          if (rateLimitInfo.count >= MAX_REQUESTS) {
            return NextResponse.json(
              { error: "Too many requests. Please try again later." },
              { status: 429 }
            );
          }
          rateLimitInfo.count += 1;
        } else {
          rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    }

    // 2. Parse and Validate Request Body
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message, website } = result.data;

    // 3. Honeypot check
    if (website && website.length > 0) {
      // Bot detected, silently accept but do nothing
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    // 4. Save to Database (Parameterized queries are handled automatically by Prisma)
    const savedMessage = await prisma.message.create({
      data: { name, email, content: message },
    });

    // 5. Send Email via Resend
    if (resend) {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Replace with verified domain
        to: "t.karman.singh@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    } else {
      console.warn("RESEND_API_KEY is not set. Email not sent, but saved to DB.");
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
