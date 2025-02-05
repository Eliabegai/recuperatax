import { House, SquarePenIcon, File, FileChartColumnIcon, Search, BotIcon, Users, Globe } from "lucide-react";

export default function Sidebar() {
  return(
    <aside className="flex flex-col h-full w-60 gap-8 p-4 border border-yellow-600">
            <div className="flex flex-row gap-2">
              <span> <House /></span>
              <span>Início</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <SquarePenIcon /></span>
              <span>Cadastro</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <File /></span>
              <span>Arquivos Fiscais</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <FileChartColumnIcon /></span>
              <span>Relatório</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <Search /></span>
              <span>Diagnóstico Express</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <BotIcon /></span>
              <span>Consultor IA</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <Users /></span>
              <span>Área de Membros</span>
            </div>
            <div className="flex flex-row gap-2">
              <span> <Globe /></span>
              <span>Abrir Chamado</span>
            </div>
        </aside>
  )
}