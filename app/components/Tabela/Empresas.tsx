import { Eye, Edit, Trash } from "lucide-react";

interface Empresa {
  nome: string;
  email: string;
  cnpj: string;
  estado: string;
  contato: string;
  cidade: string;
}

const empresas: Empresa[] = [
  {
    nome: "W. Wanderosch Carvel Auto Pec...",
    email: "BARRAAUTOPECAS@GMAIL.COM",
    cnpj: "34.057.391/0001-00",
    estado: "RJ",
    contato: "(22) 3081-2251",
    cidade: "MACAE",
  },
  {
    nome: "Raposo E Silva Clínica Odonto...",
    email: "CONASSES@CONASSES.COM.BR",
    cnpj: "24.532.576/0001-68",
    estado: "MG",
    contato: "(31) 3331-6275",
    cidade: "BELO HORIZONTE",
  },
  {
    nome: "Padaria E Confeitaria São Jos...",
    email: "APADARIAJOSAOJOSE@HOTMAIL.COM",
    cnpj: "51.085.959/0001-08",
    estado: "SP",
    contato: "(18) 3659-1247",
    cidade: "BILAC",
  },
  {
    nome: "Fba Administradora De Bens LT...",
    email: "teste@teste.com.br",
    cnpj: "10.487.508/0001-10",
    estado: "SC",
    contato: "(47) 3275-9100",
    cidade: "JARAGUÁ DO SUL",
  },
];

export default function EmpresaTable() {
  return (
    <div className="flex flex-col w-full p-2 gap-2 text-xs text-blue-900 overflow-auto">
      
          {empresas.map((empresa, index) => (
            <div key={index} className="grid grid-cols-7 w-full border-b justify-between bg-gray-100 items-center border-slate-300 rounded-lg p-4">
              <div className="col-span-3">
                <div  className="flex flex-col w-72">
                  <span>Nome: <span className="font-bold">{empresa.nome}</span></span>
                  <span>Email: <span className="font-bold">{empresa.email}</span></span>
                </div>
              </div>
              <div className="col-span-2">
                <div  className="flex flex-col w-72">
                  <span>CNPJ: <span className="font-bold">{empresa.cnpj}</span></span>
                  <span>Estado: <span className="font-bold">{empresa.estado}</span></span>
                </div>
              </div>
              <div className="col-span-1">
                <div  className="flex flex-col w-72">
                  <span>Contato: <span className="font-bold">{empresa.contato}</span></span>
                  <span>Cidade: <span className="font-bold">{empresa.cidade}</span></span>
                </div>
              </div>
              <div className="col-span-1">
                <div  className="flex justify-end gap-2 font-bold w-32">
                  <button className="text-gray-600 hover:text-sky-600">
                    <Eye size={14} absoluteStrokeWidth />
                  </button>
                  <button className="text-gray-600 hover:text-sky-600">
                    <Edit size={14} absoluteStrokeWidth />
                  </button>
                  <button className="text-red-600 hover:text-sky-600">
                    <Trash size={14} absoluteStrokeWidth  />
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
