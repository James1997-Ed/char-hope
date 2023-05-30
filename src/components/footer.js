import Link from 'next/link'
import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'


function Footer() {
  return (
    <div className="mx-auto flex flex-col md:flex-row bg-black text-white">
      <div className="text-center md:text-left">
      <h3 className="font-bold text-xl m-2">Clar Hope Foundation</h3>
      <div className= "flex m-4">
        <Link href="/"><AiFillFacebook className='m-2' size={40}/></Link>
        <Link href="/"><AiFillInstagram className='m-2' size={33}/></Link>
        <Link href="/"><AiOutlineTwitter className='m-2' size={33}/></Link>
      </div>
         <div className ="sm:block">
         <Link href="/donate" className="mx-2 sm:mx-2">
         <button className="sm:px-6 sm:py-4 sm:m-16 bg-white text-black font-bold border border-white hover:bg-white hover:text-black">Donate Now!</button>
       </Link>
       <Link href="/application" className="mx-4 sm:mx-8">
         <button className="sm:px-6 sm:py-4  sm:m-16 bg-white text-black font-bold border border-white  hover:bg-white hover:text-black">Applied!</button>
       </Link>
         </div>
      <p className="text-gray-400">Copyright © {new Date().getFullYear()}</p>
      <p>Power by SNS Africa</p>
    </div>
    </div>
  )
}

export default Footer
