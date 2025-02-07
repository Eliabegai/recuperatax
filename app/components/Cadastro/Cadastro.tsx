"use client"
import { useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CadastroEmpresa = ({onChange}: {onChange: (data:any) => void}) => {

  const [formData, setFormData] = useState({
    cnpj: "",
    nome: "",
    nomeFantasia: "",
    contato: "",
    email: "",
    cep: "",
    pais: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    const updatedData = { ...formData, [name]: value}
    setFormData(updatedData)
    onChange(updatedData)
  }

  return (
    <form className="flex flex-col w-full bg-gray-100 p-4 rounded text-blue-900">
      <div className="flex gap-4 text-sm">
        <span className="border-b-2 border-emerald-500">Dados Gerais</span>
        <span>Filiais</span>
      </div>

      <div className="flex flex-wrap p-2 mt-2 text-sm gap-10">
        <div className="flex flex-col w-60">
          <span className="font-bold">CNPJ</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.cnpj}
            name="cnpj"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Nome</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.nome} 
            name="nome"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Nome Fantasia</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.nomeFantasia} 
            name="nomeFantasia"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Contato</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.contato} 
            name="contato"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Email</span>
          <input 
            type="email" 
            className="rounded p-1" 
            value={formData.email} 
            name="email"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">CEP</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.cep} 
            name="cep"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">País</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.pais} 
            name="pais"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Estado</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.estado} 
            name="estado"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Cidade</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.cidade} 
            name="cidade"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Bairro</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.bairro} 
            name="bairro"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-96">
          <span className="font-bold">Rua</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.rua} 
            name="rua"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Numero</span>
          <input 
            type="number" 
            className="rounded p-1" 
            value={formData.numero} 
            name="numero"
            onChange={handleChange} 
          />
        </div>
        <div className="flex flex-col w-60">
          <span className="font-bold">Complemento</span>
          <input 
            type="text" 
            className="rounded p-1" 
            value={formData.complemento} 
            name="complemento"
            onChange={handleChange} 
          />
        </div>
      </div>
    </form>
  )
}

export default CadastroEmpresa