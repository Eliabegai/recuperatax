import Image from "next/image";
import Logo from "./assets/logo-white.png"
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden p-8">
      <header className="flex gap-6 flex-wrap items-center justify-center p-4 border border-purple-600">
        <Image src={Logo} width={200} height={100} alt="Logo RecuperaTax" />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-8 items-center sm:items-start p-8 overflow-auto border border-green-600">
          Conteudo
        </main>

      </div>
    </div>
  );
}
