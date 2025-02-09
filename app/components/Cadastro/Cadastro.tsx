"use client"

import { IFormData } from "@/app/cadastro/page";

interface FormularioProps {
  formData: IFormData;
  setFormData: (data: Partial<IFormData>) => void;
  errors: { [key: string]: string };
}

 
const CadastroEmpresa = ({ formData, setFormData, errors }: FormularioProps) => {

  return (
    <form className="flex flex-col w-full h-96 bg-gray-100 p-4 rounded text-blue-900">
      <div className="flex gap-4 items-start text-sm">
        <span className="border-b-2 border-emerald-500">Dados Gerais</span>
        <span>Filiais</span>
      </div>

      <div className="flex flex-wrap justify-items-start just items-center h-full p-4 mt-4 text-sm gap-6">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className={`flex flex-col text-xs ${key === "rua" ? "w-[700px]" : "w-96"} `}>
            <label className="block capitalize font-bold">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type={key === "email" ? "email" : "text"}
              className="p-1 w-full rounded"
              value={value}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
            />
            {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
          </div>
        ))}
      </div>
    </form>
  )
}

export default CadastroEmpresa