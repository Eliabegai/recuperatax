"use client"
import { Search } from "lucide-react";
import Layout from "../components/Layout/Layout"
import EmpresaTable from "../components/Tabela/Empresas";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast} from "sonner";
import { api } from "../../api.js"


export type EmpresaType = {
  id: string;
  cnpj: string;
  name: string;
  fantasyName: string;
  contact: string;
  email: string;
  cep: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
};


const Empresas = () => {
  const router = useRouter()

  const [empresas, setEmpresas] = useState<EmpresaType[]>([])
  const [filter, setFilter] = useState("")
  
  useEffect(() => {

    updateEmpresas()
  }, [])

  const updateEmpresas = async () => {
    const toastId = toast.loading("Atualizando tabela ... ")
    try {
      const response = await api.get<EmpresaType[]>(`/empresas`)
      setEmpresas(response.data)
      toast.success("Atualizado!", {id: toastId})
    } catch (error) {
      console.error("Erro ao buscar os dados!.", error)
      toast.error("Erro ao buscar os dados!", {id: toastId})
    }
  }

  const handleFilterEmpresa = async () => {
    const toastId = toast.loading("Buscando... " + filter)
    setTimeout(async () => {
      if(filter === "") {
        toast.warning("Campo de pesquisa vazio, informe um nome.", {id: toastId})
        updateEmpresas()
        
      } else {
        try {
          const response = await api.get<EmpresaType[]>(`/empresas?name_like=${encodeURIComponent(filter)}`)
          setEmpresas(response.data)
          toast.success("Encontrado: " + filter, {id: toastId})
        } catch (error) {
          console.error("Erro ao buscar empresa.", error)
          toast.error("Erro ao buscar a empresa" + filter, {id: toastId})
        }
      }
    }, 3000)

  }

  return(
    <Layout>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-bold text-xl text-blue-900">Empresas</h2>
        <div className="flex gap-4 text-sm text-zinc-200">
          <div className="flex gap-2">
            <button className="bg-emerald-500 py-2 px-3 rounded-md" onClick={handleFilterEmpresa}><Search size={16} /></button>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Pesquisar..." className="text-gray-700 p-2" />
          </div>
          <button onClick={() => router.push("/cadastro")} className="bg-emerald-500 px-4 rounded-md">Cadastrar</button>
        </div>
      </div>
      <EmpresaTable data={empresas} />
    </Layout>
  )
}

export default Empresas