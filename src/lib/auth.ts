import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check if it's the default admin (for demonstration)
        // In a real app, you would hash this and store in DB.
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "password123"
        ) {
          return { id: "1", name: "Admin", email: "admin@example.com", role: "admin" };
        }

        // Or check DB
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        });

        if (user && bcrypt.compareSync(credentials.password as string, user.password)) {
          return { id: user.id, name: user.name, email: user.email, role: user.role };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
