import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../assets/logo-light-gray.png"
import { Bell, BotIcon, User } from "lucide-react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props:any) {
  return(
    <div className="flex flex-col h-screen overflow-hidden p-8">
      <header className="flex flex-row items-center justify-between p-2 bg-gray-100 border-b-2 border-green-500">
        <Image src={Logo} width={200} height={100} alt="Logo RecuperaTax" />
        <div className="flex justify-center w-20 p-1 gap-2">
          <div className="flex justify-center items-center p-1 w-10 rounded-full border"><Bell /></div>
          <div className="flex justify-center items-center p-1 w-10 rounded-full border"><User /></div>
        </div>
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
        <main className="flex flex-col flex-1 gap-8 items-center sm:items-start p-8 overflow-auto">
          {props.children}
        </main>
      </div>
    </div>
  )
}