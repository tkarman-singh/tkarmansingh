"use client";

import { useState, useRef, useEffect } from "react";
import anime from "animejs";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".contact-reveal",
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutQuart",
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 contact-reveal opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-[color:var(--color-muted)] max-w-2xl mx-auto text-lg">
            Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 contact-reveal opacity-0 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[--color-accent-1] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            {/* Honeypot field - hidden from real users */}
            <input 
              type="text" 
              name="website" 
              value={formData.website} 
              onChange={handleChange} 
              className="hidden" 
              tabIndex={-1} 
              autoComplete="off" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "loading"}
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[--color-accent-1] focus:ring-1 focus:ring-[--color-accent-1] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[--color-accent-1] focus:ring-1 focus:ring-[--color-accent-1] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                required
                disabled={status === "loading"}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[--color-accent-1] focus:ring-1 focus:ring-[--color-accent-1] transition-all resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle size={18} />
                <span className="text-sm">{errorMessage}</span>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                <CheckCircle size={18} />
                <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <div className="self-end mt-4">
              <Button 
                type="submit" 
                variant="primary" 
                magnetic 
                disabled={status === "loading" || status === "success"}
                className={status === "success" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {status === "loading" ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle size={18} /> Sent</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
