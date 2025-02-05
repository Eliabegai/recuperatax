import { House } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden p-8">
      <header className="flex gap-6 flex-wrap items-center justify-center p-4 border border-purple-600">
        Header
      </header>
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="flex flex-col h-full w-60 gap-8 p-4 border border-yellow-600">
            <div className="flex flex-row gap-2">
              <span> <House /></span>
              <span>Início</span>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-8 items-center sm:items-start p-8 overflow-auto border border-green-600">
          Conteudo
        </main>

      </div>

      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 border border-blue-600">
        Footer
      </footer>
    </div>
  );
}
