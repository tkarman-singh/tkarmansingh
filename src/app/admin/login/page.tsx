"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[--color-accent-1] mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-md glass-card p-8 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Lock className="text-white" size={24} />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8 text-white">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[--color-accent-1] transition-all"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[--color-accent-1] transition-all"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button type="submit" variant="primary" disabled={loading} className="w-full mt-2">
            {loading ? <Loader2 className="animate-spin" size={18} /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
