import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'


function Footer() {
  return (
    <div className="mx-auto flex flex-col md:flex-row bg-black text-white">
      <div className="text-center md:text-left">
      <h3 className="font-bold text-xl m-2">Char Hope Foundation</h3>
    <div className='sm:flex '>
      <div className= "flex m-4 sm:items-center">
        <Link href="https://web.facebook.com/flotroltransforminglib2018?_rdc=1&_rdr" target="_blank"><AiFillFacebook className='m-2 text-blue-700' size={40}/></Link>
        <Link href="https://www.instagram.com/clarhopefoundation/" target="_blank"><AiFillInstagram className='m-2 text-pink-500 ' size={33}/></Link>
        <Link href="https://twitter.com/LadyWeah" target="_blank"><AiOutlineTwitter className='m-2 text-blue-500' size={33}/></Link>
        <Image className='rounded-2xl' src="/she's you.png" alt='shes you' width="100" height="100"/>
      </div>
     <div className ="sm:block">
      <Link href="/donate" className="mx-2 sm:mx-2">
        <button className="sm:px-6 sm:py-4 p-2 rounded-xl sm:m-16 bg-white sm:text-2xl text-black font-bold border border-white hover:bg-blue-500 hover:text-black">Donate Now!</button>
        </Link>
      <Link href="/application" className="mx-4 sm:mx-8">
        <button className="sm:px-6 sm:py-4 p-2 rounded-xl sm:m-16 bg-white sm:text-2xl text-black font-bold border border-white  hover:bg-blue-500 hover:text-black">Applied!</button>
      </Link>
     </div>
    </div>
      <p className="text-gray-400 sm:text-center">Copyright © {new Date().getFullYear()}</p>
      <p className='text-xl text-center'>@2022 Power by SNS Africa</p>
    </div>
    </div>
  )
}

export default Footer
