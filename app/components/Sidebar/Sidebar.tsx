"use client"
import { useState } from "react";
import { Home, SquarePenIcon, File, FileChartColumnIcon, Search, BotIcon, Users, ChevronDown, UserRoundPenIcon, Ban } from "lucide-react";
import ItemSidebar from "./ItemSidebar";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menu =[
    {
      icon: <Home />,
      span: "Inicio",
      menu: "inicio"
    },
    {
      icon: <SquarePenIcon />,
      span: "Cadastro",
      menu: "cadastro",
      subItens: [
        {
          icon: <UserRoundPenIcon />,
          span: "Cadastro pessoa Física"
        },
        {
          icon: <UserRoundPenIcon />,
          span: "Cadastro pessoa Juríca"
        },
      ]
    },
    {
      icon: <File />,
      span: "Arquivos Fiscais",
      menu: "arquivosFiscais",
      subItens: [
        {
          icon: <UserRoundPenIcon />,
          span: "Pessoa Física"
        },
        {
          icon: <UserRoundPenIcon />,
          span: "Pessoa Juríca"
        },
      ]
    },
    {
      icon: <FileChartColumnIcon />,
      span: "Relatório",
      menu: "relatorio"
    },
    {
      icon: <Search />,
      span: "Diagnóstico Express",
      menu: "diagnosticoExpress"
    },
    {
      icon: <BotIcon />,
      span: "Consultor IA",
      menu: "consultorIA"
    },
    {
      icon: <Users />,
      span: "Área de Membros",
      menu: "areaMembros",
      subItens: [
        {
          icon: <Ban />,
          span: "Em desenvolvimento"
        }
      ]
    },
  ]

  return (
    <aside className="w-72 bg-sky-900 text-zinc-300 h-screen p-4">

      {
        menu.map((i, index) => {
          return(
          <>
            <button 
              key={index} 
              onClick={() => toggleMenu("cadastros")} 
              className="flex w-full justify-between items-center hover:bg-blue-700"
            >
              <ItemSidebar>
                {i.icon}
                <span>{i.span}</span>
              </ItemSidebar>
              <ChevronDown className={`transition ${openMenus["cadastros"] ? "rotate-180" : ""}`} />
            </button>
            {/* {
            i.subItens && openMenus[i.menu] && (
            <div className="ml-8 space-y-2">
              <p className="hover:text-gray-300 cursor-pointer">{i.subItens.span}</p>
              <p className="hover:text-gray-300 cursor-pointer">Subitem 2</p>
            </div>
            )
            } */}
          </>
          )
        })
      }

      {/* Cadastros */}
      <div>
        <button onClick={() => toggleMenu("cadastros")} className="flex w-full justify-between items-center p-3 hover:bg-blue-700">
          <div className="flex items-center space-x-3">
            <SquarePenIcon />
            <span>Cadastros</span>
          </div>
          <ChevronDown className={`transition ${openMenus["cadastros"] ? "rotate-180" : ""}`} />
        </button>
        {openMenus["cadastros"] && (
          <div className="ml-8 space-y-2">
            <p className="hover:text-gray-300 cursor-pointer">Subitem 1</p>
            <p className="hover:text-gray-300 cursor-pointer">Subitem 2</p>
          </div>
        )}
      </div>

      {/* Arquivos Fiscais */}
      <div>
        <button onClick={() => toggleMenu("arquivosFiscais")} className="flex w-full justify-between items-center p-3 hover:bg-blue-700">
          <div className="flex items-center space-x-3">
            <File />
            <span>Arquivos Fiscais</span>
          </div>
          <ChevronDown className={`transition ${openMenus["arquivosFiscais"] ? "rotate-180" : ""}`} />
        </button>
        {openMenus["arquivosFiscais"] && (
          <div className="ml-8 space-y-2">
            <p className="hover:text-gray-300 cursor-pointer">Subitem 1</p>
            <p className="hover:text-gray-300 cursor-pointer">Subitem 2</p>
          </div>
        )}
      </div>

      {/* Relatório */}
      <div>
        <button onClick={() => toggleMenu("relatorio")} className="flex w-full justify-between items-center p-3 hover:bg-blue-700">
          <div className="flex items-center space-x-3">
            <FileChartColumnIcon />
            <span>Relatório</span>
          </div>
          <ChevronDown className={`transition ${openMenus["relatorio"] ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Diagnóstico Express */}
      <div className="flex items-center space-x-3 p-3 hover:bg-blue-700 cursor-pointer">
        <Search />
        <span>Diagnóstico Express</span>
      </div>

      {/* Consultor IA */}
      <div className="flex items-center space-x-3 p-3 hover:bg-blue-700 cursor-pointer">
        <BotIcon />
        <span>Consultor IA</span>
      </div>

      {/* Área de Membros */}
      <div>
        <button onClick={() => toggleMenu("areaMembros")} className="flex w-full justify-between items-center p-3 hover:bg-blue-700">
          <div className="flex items-center space-x-3">
            <Users />
            <span>Área de Membros</span>
          </div>
          <ChevronDown className={`transition ${openMenus["areaMembros"] ? "rotate-180" : ""}`} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
