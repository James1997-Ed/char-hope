import React from 'react'
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
    const[isScroll, setIsScroll] = useState(true)
    const [handBugger, setHandBugger] = useState(false)
    const HandleClick = ()=>{
        setHandBugger(!handBugger)
    }

    const handleScroll =() =>{
      if(window.pageYOffset > 100){
        setIsScroll(false)
    }
    else{
        setIsScroll(true)
      }
    }
     
     useEffect(() =>{
       window.addEventListener("scroll", handleScroll);
       window.removeEventListener("scroll", handleScroll)
     },[])

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScroll ? 'bg-white shadow': 'hidden'}`}>
        <div className="flex-col md:flex-row hidden sm:flex items-center justify-between shadow">
            <div>
            <Link href="/"><Image src ="/logo.png" alt="react imag" width="400" height="100" className="w-48 md:w-auto h-auto"/></Link>
            </div>
        <div className="flex items-center mt-4 md:mt-0">
          <nav className="flex list-none">
                <ul className="flex m-8">
                    <li>
                        <Link href="/" className="font-bold p-2 text-xl text-blue-700 hover:text-black border border-black mr-8 rounded">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-xl text-gray-700 hover:text-blue-700 mr-8">About Us</Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-xl text-gray-700 hover:text-blue-700 mr-8">Service</Link>
                    </li>
                    <li>
                        <Link href="/application" className="text-xl text-gray-700 hover:text-blue-700 mr-8">Application</Link>
                    </li>
                    <li>
                        <Link href="/donate" className="text-xl text-gray-700 hover:text-blue-700 mr-8">Donate Now</Link>
                    </li>
                </ul>
          </nav>
        </div>
  </div>
  {/** */}
  {/** Mobile mode */}
     <div className="sm:hidden float-right p-2">
     {handBugger ? (<FaTimes size={33} onClick={() => setHandBugger(false)}/>):(<FaBars size={33} onClick={() => setHandBugger(true)}/>)}
    
     <div className ={handBugger 
        ? 'sm:hidden absolute top-0 left-0  bottom-0 flex justify-center items-center w-80 h-screen bg-blue-800 ease-in duration-300 text-center' 
        :'sm:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-blue-800 ease-in duration-300 text-center'}>
     <nav className=" list-none">
     <ul className="text-2xl ">
         <li className='m-8'>
             <Link href="/" onClick={HandleClick} className=" text-white hover:text-black  mr-4 rounded hover:bg-blue-600">Home</Link>
         </li>
         <li className='m-8'>
             <Link href="/about" onClick={HandleClick} className="text-white hover:text-black mr-4">About Us</Link>
         </li>
         <li className='m-8'>
             <Link href="/services" onClick={HandleClick} className="text-white hover:text-black mr-4">Service</Link>
         </li>
         <li className='m-8'>
             <Link href="/application" onClick={HandleClick} className="text-white hover:text-black mr-4">Application</Link>
         </li>
         <li className='m-8'>
             <Link href="/donate" onClick={HandleClick} className="text-white hover:text-black mr-4">Donate Now</Link>
         </li>
     </ul>
</nav>
    </div>
    </div>
    </div>
  )
}

export default NavBar
