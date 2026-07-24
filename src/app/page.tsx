import { NotebookController } from "@/components/notebook/NotebookController";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <NotebookController totalPages={9} />
    </main>
  );
}
