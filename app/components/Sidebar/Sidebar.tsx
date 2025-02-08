"use client"
import { useState } from "react";
import { Home, SquarePenIcon, File, FileChartColumnIcon, Search, BotIcon, Users, ChevronDown, UserRoundPenIcon, Ban, Globe, X, Menu } from "lucide-react";
import Link from "next/link";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [openSidebar, setOpenSidebar] = useState(false)

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
      menu: "empresas",
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
    {
      icon: <Globe />,
      span: "Abrir Chamado",
      menu: "abrirChamado"
    },
  ]

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <aside className={`flex flex-col items-center ${openSidebar ? "w-30" : "w-72"}  bg-sky-900 text-zinc-300 h-full`}>
      <button className="flex justify-start items-center p-3 w-full hover:bg-sky-950 focus:text-emerald-600 hover:text-emerald-500" onClick={toggleSidebar}>
        { openSidebar ? <Menu /> : <X /> }
      </button>

      {
        menu.map((i, index) => (

          openSidebar ? 
            <Link key={index} href={`/${i.menu}`}  className="flex w-30 p-3 bg-sky-800 hover:bg-sky-950">
              {
                i.icon
              }
            </Link>
            :
            <div key={index} className="flex flex-col w-full hover:bg-sky-950">
              <Link 
                key={index} 
                onClick={() => toggleMenu(i.menu)} 
                href={`/${i.menu}`}
                className="flex w-full justify-between items-center hover:bg-sky-950 focus:text-emerald-600 hover:text-emerald-500"
              >
                <div className="flex w-30 p-3 bg-sky-800 hover:bg-sky-950">{i?.icon}</div>
                <div key={index} className="flex flex-1 justify-between items-center space-x-3 p-3 hover:bg-sky-950">
                  <span>{i?.span}</span>
                { i?.subItens ? (
                    <ChevronDown className={`transition ${openMenus[i.menu] ? "rotate-180" : ""}`} />
                  ) : ("")}
                </div>
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
                  })
                  :
                  ("")
                }
            </div>
        ))
      }
    </aside>
  );
};

export default Sidebar;
