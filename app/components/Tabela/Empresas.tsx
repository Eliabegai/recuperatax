import { EmpresaType } from "@/app/empresas/page";
import { Eye, Edit, Trash } from "lucide-react";

interface IEmpresa {
  data: EmpresaType[]
}

export default function EmpresaTable({data}: IEmpresa) {

  return (
    <div className="flex flex-col w-full p-2 gap-2 max-lg:text-[10px] text-xs text-blue-900 overflow-auto">
          {
          data?.map((empresa) => (
            <div key={empresa?.id} id={empresa?.id} className="grid grid-cols-7 w-full border-b justify-between bg-gray-100 items-center border-slate-300 rounded-lg p-4">
              <div className="col-span-3">
                <div  className="flex flex-col w-72">
                  <span>Nome: <span className="font-bold">{empresa?.name}</span></span>
                  <span>Email: <span className="font-bold">{empresa?.email}</span></span>
                </div>
              </div>
              <div className="col-span-2">
                <div  className="flex flex-col w-72">
                  <span>CNPJ: <span className="font-bold">{empresa?.cnpj}</span></span>
                  <span>Estado: <span className="font-bold">{empresa?.state}</span></span>
                </div>
              </div>
              <div className="col-span-1">
                <div  className="flex flex-col w-72">
                  <span>Contato: <span className="font-bold">{empresa?.contact}</span></span>
                  <span>Cidade: <span className="font-bold">{empresa?.city}</span></span>
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
