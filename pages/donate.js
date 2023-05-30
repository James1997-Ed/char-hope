import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function DonateNow() {
  return (
    <div className='mt-32'>
      <div className='bg-cyan-500 block sm:flex'>
         <div className='text-white font-bold'>
           <h1 className='sm:text-6xl text-4xl mt-32 m-4'>Every Donation Is A Great Difference </h1>
           <h1 className='sm:text-2xl m-2 sm:m-8'>Your donation will build and empower girls and give them the bright future.</h1>
         </div>
         <div className=''>
           <Image src="/Annotation 2022-09-29 101441 - Copy.png" alt="image" width="900" height="200"/>
         </div>
      </div>
      <div>
         <div className=''>
           <h1 className='text-center font-bold text-6xl mt-16'>Contact Us</h1>
           <h1 className='text-center font-bold text-4xl mt-16'>If you would to donate at this time please</h1>
           <div className='flex justify-center'>
             <Link href="/contact">
               <button className='px-4 py-2 ml-62 mt-4 border-gradient-to-r border-4 from-blue-500 to-purple-0 
                text-blue-600 font-bold text-2xl rounded hover:text-white hover:bg-blue-700
                 border-blue-400'>Contact Us</button>
             </Link>
           </div>
         </div>
         <div className='block sm:flex relative'>
  <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
    <div>
      <Link href="/sponsor"><button className='px-4 py-2 sm:ml-16 ml-20 mt-4 border-gradient-to-r border-4
       from-blue-500 to-purple-0 text-blue-300 shadow-4xl sm:text-black font-bold text-2xl
       rounded hover:text-white hover:bg-blue-700 border-blue-400'>
        Sponsor Now
      </button>
      </Link>
      <h1 className='text-black text-left sm:text-center  sm:text-blue-500  mt-4 font-bold text-2xl sm:text-4xl'>
        Sponsor A Child Today and<br/> Give Him/Her A <br/>Brighter Tomorrow
      </h1>
    </div>
  </div>
  <div className='sm:ml-32'>
    <Image className='items-center m-auto mt-8 sm:ml-72' src='/hugging (2).jpg' alt='image' width='600' height='200' />
  </div>
</div>

      </div>
    </div>
  )
}

export default DonateNow
