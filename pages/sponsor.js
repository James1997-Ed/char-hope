import React from 'react'
import Image from 'next/image'

function SponsorUs() {
  return (
    <div className='mt-32'>
      <div className='ml-4'>
        <div className='block sm:flex'>
        <Image className='sm:m-4 sm:ml-20' src="/hope.png" alt="city of hope" width="800" height="200"/>
        <h1 className='font-bold text-4xl m-8 z-0 '>Sponsor A Child!</h1>
        </div>
      </div>
      <div className='block sm:flex'>
        <div className=''>
        <h1 className='font-bold text-4xl sm:text-8xl p-4'>What is Sponsorship </h1>
        <h1 className='text-xl sm:text-4xl p-8 sm:pl-8'>When you sponsor a child, you care and encourage them through letter <br/> writing and financial support. That support empowers
        them individually historically <br/> meet their needs in a loving, safe community<br/> where they can learn, grow, play and dream.
        It&quot;s a relationship more powerful than poverty-changing their life and yours!</h1>
        </div>
        <div className="sm:relative sm:m-16">
        <Image src="/child2.jpg" alt="image" width="1000" height="400" />
        <div className="sm:absolute sm:top-0 sm:left-0 sm:z-10 sm:p-4 bg-white bg-opacity-50">
          <h1 className="text-2xl m-2 text-center font-bold">
            For $20 a month, you can provide a child living in poverty with food, clothing, and education.
          </h1>
        </div>
      </div>
      
      </div>
        <div className='flex justify-center'>
          <button className='bg-pink-500 sm:p-4 sm:text-4xl rounded p-2  text-center text-white'>Sponsor Now</button>
        </div>
      <div className='p-12'>
         <h1 className='text-4xl font-bold p-4 pt-12'><i>Our Work</i></h1>
         <p className='text-2xl'>We provide necessities such as food,<br/> clothing, hygiene items, educational support in countries</p>
      </div>
        <h1 className='text-center text-4xl sm:text-6xl font-bold'>Our Global Reach</h1>
      <div className='block sm:flex justify-between p-16'>
        <div >
          <Image className='m-auto' src="/earth2.png" alt="image" width="200" height="100"/>
          <h1 className='text-4xl'>Across Countries and <br/>Countries Served</h1>
        </div>
        <div className='pb-4'>
          <Image className='m-auto' src="/students.jpg" alt="earth" width="280" height="100"/>
          <h1 className='text-4xl'>Several Children <br/> Help since 2018</h1>
        </div>
      </div>
    </div>
  )
}

export default SponsorUs
