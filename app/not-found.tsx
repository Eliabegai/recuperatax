import Image from 'next/image'
import breve from "./assets/icon.png"
import Layout from './components/Layout/Layout'
 
export default function NotFound() {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-full h-screen p-10'>
        <div className='flex'>
          <Image src={breve} width={100} height={100} alt='Em breve' />
        </div>
        <div className='flex flex-col justify-center mt-2 text-blue-900 items-center'>
          <p>Em desenvolvimento.</p>
          <p>Agradecemos a compreensão!</p>
        </div>
      </div>
    </Layout>
  )
}