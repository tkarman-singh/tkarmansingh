import { auth, signOut } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { LogOut, Mail, Trash2 } from "lucide-react";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen bg-[--color-background] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12 glass-card p-6 rounded-2xl">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-[color:var(--color-muted)]">Welcome back, {session.user?.name || "Admin"}</p>
          </div>
          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <button type="submit" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
              <LogOut size={18} /> Sign Out
            </button>
          </form>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-[--color-accent-1]/20 rounded-xl text-[--color-accent-1]">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[color:var(--color-muted)] text-sm font-medium uppercase tracking-wider">Total Messages</p>
              <p className="text-3xl font-bold text-white">{messages.length}</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Contact Submissions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[color:var(--color-muted)] text-sm">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Message</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-[color:var(--color-muted)]">
                      No messages yet.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-4 font-medium text-white">{msg.name}</td>
                      <td className="p-4"><a href={`mailto:${msg.email}`} className="text-[--color-accent-2] hover:underline">{msg.email}</a></td>
                      <td className="p-4 max-w-xs truncate">{msg.content}</td>
                      <td className="p-4 text-sm text-[color:var(--color-muted)]">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <form action={async () => {
                          "use server";
                          await prisma.message.delete({ where: { id: msg.id } });
                        }}>
                          <button type="submit" className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 transition-all">
                            <Trash2 size={18} />
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
