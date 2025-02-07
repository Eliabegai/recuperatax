"use client"
import { Eye, EyeClosed, LockKeyhole, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Logo from "../assets/logo-light-gray.png"

const Login = () => {

  const [dataLogin, setDataLogin] = useState({
    nome: "",
    senha: "",
    remember: false
  })
  const [viewPassword, setViewPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    const updatedData = { ...dataLogin, [name]: value}
    setDataLogin(updatedData)
  }

  return (
    <div className="flex flex-col w-full h-screen bg-gray-300 justify-center items-center">
      <div className="flex flex-col w-[500px] h-[500px] justify-center items-center p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="flex relative w-72 h-20">
            <Image src={Logo} alt="logo" fill />
          </div>
          <span className="text-xl text-sky-700 mt-2">Seja bem vindo!</span>
        </div>
        <div className="flex flex-col w-full px-6 py-4">
          <span className={`flex fixed ${dataLogin.nome.length ? "-mt-7" : "-mt-3"} ml-4 text-sm items-end focus:-mt-7`}><span><User /></span>Usuário</span>
          <input
            type="text" 
            className="flex w-full border-b border-l border-sky-900 px-3 bg-gray-100 outline-none focus:ring-gray-500" 
            autoFocus 
            placeholder="" 
            name="nome"
            value={dataLogin.nome}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row w-full px-6 py-4 mt-5">
          <span className={`flex fixed ${dataLogin.senha.length ? "-mt-7" : "-mt-3"} ml-4 text-sm items-end`}><span><LockKeyhole /></span>Senha</span>
          <input 
            type={viewPassword ? "password" : "text"} 
            className="flex w-full border-b border-l border-sky-900 px-3 bg-gray-100 outline-none focus:ring-gray-500" 
            placeholder="" 
            name="senha"
            value={dataLogin.senha}
            onChange={handleChange}
          />
          <button onClick={() => setViewPassword(!viewPassword)} className={`relative text-gray-600 hover:text-gray-900`}>{viewPassword ? <EyeClosed /> : <Eye />}</button>
        </div>
        <div className="flex flex-row w-full justify-between items-center px-6">
          <span>
            <input type="checkbox" />
            <span>Lembrar de mim</span>
          </span>
          <span>
            <Link rel="stylesheet" href="/login">Esqueci minha senha</Link>
          </span>
        </div>
        <div className="mt-10 flex w-full">
          <button className="flex w-full bg-emerald-500 px-4 py-2 rounded items-center justify-center text-gray-200">LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login