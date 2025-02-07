"use client"
import { useState } from "react";
import { Home, SquarePenIcon, File, FileChartColumnIcon, Search, BotIcon, Users, ChevronDown, UserRoundPenIcon, Ban, Globe } from "lucide-react";
import Link from "next/link";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menu =[
    {
      icon: <Home />,
      span: "Inicio",
      menu: "/"
    },
    {
      icon: <SquarePenIcon />,
      span: "Cadastro",
      menu: "cadastro",
      subItens: [
        {
          icon: <UserRoundPenIcon size={16} />,
          span: "Cadastro pessoa Física"
        },
        {
          icon: <UserRoundPenIcon size={16} />,
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
          icon: <UserRoundPenIcon size={16} />,
          span: "Pessoa Física"
        },
        {
          icon: <UserRoundPenIcon size={16} />,
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
          icon: <Ban size={16} />,
          span: "Em desenvolvimento"
        }
      ]
    },
  ]

  return (
    <aside className="flex flex-col items-center w-72 bg-sky-900 text-zinc-300 h-screen p-4">

      {
        menu?.map((i, index) => {
          return(
          <>
            <Link 
              key={index} 
              onClick={() => toggleMenu(i.menu)} 
              href={`/${i.menu}`}
              className="flex w-full justify-between items-center hover:bg-sky-950 focus:text-emerald-500 hover:text-emerald-400"
            >
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-sky-950">
                {i?.icon}
                <span>{i?.span}</span>
              </div>
               { i?.subItens ? (
                  <ChevronDown className={`transition ${openMenus[i.menu] ? "rotate-180" : ""}`} />
                ) : ("")}
            </Link>

            { 
            i?.subItens ?
              i?.subItens.map((j, k) => {
                return(
                  openMenus[i.menu] &&
                    (
                      <div key={k} className="flex w-48 justify-start items-center ml-8 space-y-2 gap-2 border-b border-zinc-500 hover:text-zinc-400 cursor-pointer text-sm">
                        <span>{j.icon}</span>
                        <span>{j.span}</span>
                      </div>
                    )
                )
              }) : ("")
            }
          </>
          )
        })
      }

      <button 
        onClick={() => toggleMenu("abrir chamado")} 
        className="flex relative bottom-0 w-full justify-between items-center hover:bg-sky-950 focus:text-emerald-500 hover:text-emerald-400"
      >
        <div className="flex items-center space-x-3 p-3 hover:bg-sky-950">
          <Globe />
          <span>Abrir Chamado</span>
        </div>
      </button>

    </aside>
  );
};

export default Sidebar;
