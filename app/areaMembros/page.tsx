"use client"

import { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { toast } from "sonner"

interface IFileData {
  name: string;
  value: string;
}

const AreaMembros = () => {

  const [sheets, setSheets] = useState<IFileData[]>([])
  const url = "http://localhost:3001/sheets"

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setSheets(data.data))
    .catch((err) => (
      console.error(err),
      toast.error("Error ao buscar dados!")
    ))
  }, [])

  console.log("sheets: ", sheets)

  return(
    <Layout>
      <div className="flex w-full overflow-x-auto">
      <table className="w-full border-none shadow-md rounded-lg">
        <thead>
          <tr className="w-full bg-sky-900 text-gray-200 border-none text-left text-sm">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {sheets?.map((sheet, index) => (
            <tr key={index} className={`text-left ${index % 2 ? "bg-gray-200" : ""} hover:bg-gray-300 text-xs`}>
              <td className="px-4 py-2">{sheet.name}</td>
              <td className="px-4 py-2">
                <a 
                  href={sheet.value} 
                  download
                  target="_blank"
                  className="text-blue-600 font-semibold hover:text-blue-600 transition"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  )
}

export default AreaMembros