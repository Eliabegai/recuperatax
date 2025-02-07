"use client"
import { MoveLeftIcon } from "lucide-react"
import CadastroEmpresa from "../components/Cadastro/Cadastro"
import Layout from "../components/Layout/Layout"
import Link from "next/link"
import { useState } from "react"

const Cadastro = () => {

  const [dadosEmpresa, setDadosEmpresa] = useState({})

  const handleSave = () => {
    console.log("Dados empresa: ", dadosEmpresa)
    alert("Registrado com Sucesso!")
  }

  return(
    <Layout>
      <div className="w-full flex justify-between items-center">
        <Link href={"/empresas"} className="flex gap-2 text-2xl text-blue-900 font-bold text-center px-2">
          <span><MoveLeftIcon /></span> Cadastro de Empresas
        </Link>

        <button className="px-4 py-1 bg-emerald-500 rounded-md text-zinc-100" onClick={handleSave}>Salvar</button>
      </div>
      <CadastroEmpresa onChange={setDadosEmpresa} />
    </Layout>
  )
}

export default Cadastro