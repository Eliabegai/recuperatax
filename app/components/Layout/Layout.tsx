import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../assets/logo-white.png"
import { BotIcon } from "lucide-react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props:any) {
  return(
    <div className="flex flex-col h-screen overflow-hidden p-8">
      <header className="flex gap-6 flex-wrap items-center justify-center p-4 border border-purple-600">
        <Image src={Logo} width={200} height={100} alt="Logo RecuperaTax" />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="hidden flex-col items-center w-20 gap-4 bg-sky-900 text-zinc-300 h-screen p-4">
          <BotIcon />
          <BotIcon />
          <BotIcon />
          <BotIcon />
          <BotIcon />
          <BotIcon />
          <BotIcon />
        </div>
        <main className="flex flex-col flex-1 gap-8 items-center sm:items-start p-8 overflow-auto border border-green-600">
          {props.children}
        </main>
      </div>
    </div>
  )
}