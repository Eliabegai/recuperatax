"use client"
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../assets/logo-light-gray.png"
import { Bell, User } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props:any) {
  return(
    <div className="flex flex-col h-screen overflow-hidden p-8">
      <header className="flex flex-row items-center justify-between p-2 bg-gray-100 border-b-2 border-green-500">
        <Image src={Logo} width={200} height={100} alt="Logo RecuperaTax" />
        <div className="flex justify-center w-20 p-1 gap-2">
          <button onClick={() => toast.info("Sem menssagens no momento!")} className="flex justify-center items-center p-1 w-10 rounded-full border"><Bell /></button>
          <Link href={"/login"} className="flex justify-center items-center p-1 w-10 rounded-full border"><User /></Link>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-col flex-1 gap-8 items-center sm:items-start p-8 overflow-auto">
          {props.children}
        </main>
      </div>
    </div>
  )
}