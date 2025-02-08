"use client"
import { MoveLeftIcon } from "lucide-react"
import CadastroEmpresa from "../components/Cadastro/Cadastro"
import Layout from "../components/Layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export interface IFormData {
  cnpj: string;
  nome: string;
  nomeFantasia: string;
  contato: string;
  email: string;
  cep: string;
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}

const Cadastro = () => {

  const router = useRouter()

  const [formData, setFormData] = useState<IFormData>({
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
  
  const [errors, setErrors] = useState<{[key: string]:string}>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.cnpj.trim()) newErrors.cnpj = "O CNPJ é obrigatório.";
    else if (!/^\d{14}$/.test(formData.cnpj)) newErrors.cnpj = "CNPJ inválido. Deve ter 14 números.";

    if (!formData.nome.trim()) newErrors.nome = "O nome é obrigatório.";
    if (!formData.nomeFantasia.trim()) newErrors.nomeFantasia = "O nome fantasia é obrigatório.";
    if (!formData.contato.trim()) newErrors.contato = "O contato é obrigatório.";
    if (!formData.email.trim()) newErrors.email = "O e-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "E-mail inválido.";

    if (!formData.cep.trim()) newErrors.cep = "O CEP é obrigatório.";
    if (!formData.pais.trim()) newErrors.pais = "O país é obrigatório.";
    if (!formData.estado.trim()) newErrors.estado = "O estado é obrigatório.";
    if (!formData.cidade.trim()) newErrors.cidade = "A cidade é obrigatória.";
    if (!formData.bairro.trim()) newErrors.bairro = "O bairro é obrigatório.";
    if (!formData.rua.trim()) newErrors.rua = "A rua é obrigatória.";

    if (!formData.numero.trim()) newErrors.numero = "O número é obrigatório.";
    else if (!/^\d+$/.test(formData.numero)) newErrors.numero = "O número deve conter apenas dígitos.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const updateFormData = (data: Partial<IFormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleSubmit = () => {
    console.log("Dados empresa: ", formData)
    if (validate()) {
      toast.success("Cadastrado com sucesso!")
      router.push("/empresas")
    }
  };

  return(
    <Layout>
      <div className="w-full flex justify-between items-center">
        <Link href={"/empresas"} className="flex gap-2 text-2xl text-blue-900 font-bold text-center px-2">
          <span><MoveLeftIcon /></span> Cadastro de Empresas
        </Link>

        <button className="px-4 py-1 bg-emerald-500 rounded-md text-zinc-100" onClick={handleSubmit}>Salvar</button>
      </div>
      <CadastroEmpresa formData={formData} setFormData={updateFormData} errors={errors} />
    </Layout>
  )
}

export default Cadastro