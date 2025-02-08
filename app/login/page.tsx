"use client"
import { Eye, EyeClosed, Loader, LockKeyhole, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"
import Logo from "../assets/logo-light-gray.png"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const Login = () => {

  const router = useRouter()

  const [dataLogin, setDataLogin] = useState({
    nome: "",
    senha: "",
    remember: false
  })
  const [viewPassword, setViewPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    const updatedData = { ...dataLogin, [name]: value}
    setDataLogin(updatedData)
  }

  const handleLogin = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(dataLogin.nome === "admin" && dataLogin.senha === "admin") {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        toast.success("Bem vindo!")
        router.push("/")
      }, 3000)
    } else {
      toast.error("Usuário ou senha inválidos!")
    }
  }

  return (
    <div className="flex flex-col w-full h-screen bg-gray-300 justify-center items-center">
      <div className="flex flex-col w-[500px] h-[500px] justify-center items-center p-4 bg-gray-100 rounded-lg shadow-xl">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="flex relative w-72 h-20">
            <Image src={Logo} alt="logo" fill />
          </div>
          <span className="text-xl text-sky-700 mt-2">Seja bem vindo!</span>
        </div>
        <form className="flex flex-col w-full px-6 py-4" onSubmit={handleLogin}>
        <div className="flex flex-col w-full px-6 py-4">
          <span className={`flex fixed ${dataLogin.nome.length ? "-mt-7" : "-mt-3"} ml-4 text-sm items-end focus:-mt-7`}><span><User /></span>Usuário</span>
          <input
            type="text" 
            className="flex w-full border-b border-l border-sky-900 px-3 bg-gray-100 outline-none focus:ring-gray-500" 
            autoFocus
            required
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
            required
            value={dataLogin.senha}
            onChange={handleChange}
          />
          <span onClick={() => setViewPassword(!viewPassword)} className={`relative text-gray-600 hover:text-gray-900`}>{viewPassword ? <EyeClosed /> : <Eye />}</span>
        </div>
        <div className="flex flex-row w-full justify-between items-center px-6">
          <span>
            <input name="remember" type="checkbox" onChange={handleChange} />
            <span>Lembrar de mim</span>
          </span>
          <span>
            <Link rel="stylesheet" href="/login">Esqueci minha senha</Link>
          </span>
        </div>
        <div className="mt-10 flex w-full">
          <button type="submit" className={`flex w-full ${loading ? "bg-emerald-500 pointer-events-none" : "bg-emerald-500"}  px-4 py-2 rounded items-center justify-center text-gray-200`}>
            {
              <span className={`${loading ? "mr-2 animate-spin" : "hidden"}`}><Loader /></span>
            } LOGIN
          </button>
        </div>
      </form>
     </div>    
    </div>
  )
}

export default Login