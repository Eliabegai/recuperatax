import Image from 'next/image'
import Link from 'next/link'
import breve from "./assets/breve.jpg"
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-full h-screen p-10'>
      <div className='flex relative w-full h-full'>
        <Image src={breve} fill alt='Em breve' />
      </div>
      <div className='flex justify-center items-center -mt-20 z-10'>
        <Link href="/" className='p-6 rounded bg-emerald-400 text-zinc-300'>Return Home</Link>
      </div>
    </div>
  )
}