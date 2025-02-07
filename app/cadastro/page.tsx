import { Search } from "lucide-react";
import Layout from "../components/Layout/Layout"
import EmpresaTable from "../components/Tabela/Empresas";

const Cadastro = () => {
  return(
    <Layout>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-bold text-xl text-blue-900">Empresas</h2>
        <div className="flex gap-4 text-sm text-zinc-200">
          <div className="flex gap-2">
            <button className="bg-emerald-500 py-2 px-3 rounded-md"><Search size={16} /></button>
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <button className="bg-emerald-500 px-4 rounded-md">Cadastrar</button>
        </div>
      </div>
      <EmpresaTable />
    </Layout>
  )
}

export default Cadastro