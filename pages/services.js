import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className='mx-20 my-2'>
      <div className='mt-32'>
        <div>
          <h1 className='text-4xl m-8 font-bold text-center'>Our Services</h1>
          <h1 className='text-2xl m-2 font-bold text-center'>We&apos;re glad that you&apos;re here!</h1>
        </div>
        <div className='block sm:flex'>
          <div className='m-2'>
          <Image src="/Dist.png" alt="image" width="400" height="400"/>
          </div>
          <div className='m-2'>
            <Image src="/new5.png" alt="image" width="400" height="400"/>
          </div>
          <div className='m-2'>
           <Image src="/new5.png" alt="image" width="400" height="400"/>
        </div>
        </div>
        <div className='block sm:flex mt-20'>
          <div>
          <div className='items-center'>
            <Image src="/baby2.png" alt="image" width="100" height="100" className="mx-auto"/>
          </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>Health</h1>
          <p>Ending all forms of
          sexual Gender-Based Violence.
          Ending maternal and
          neo-natal mortality.</p>
        </div>
          </div>
          <div>
          <div>
            <Image src="/new2.jpg" alt="image" width="100" height="100" className="mx-auto"/>
          </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>Education</h1>
          <p>Financial Aid 
          Training opportunities
          For medical pactional.</p>
        </div>
          </div>
          <div>
          <div>
            <Image src="/images2.png" alt="image" width="150" height="100" className="mx-auto"/>
          </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>Economic Empowerment</h1>
          <p>Women empowerment through
          agriculture vocational training 
          opportunities for woman and youth.</p>
        </div>
          </div>
          <div>
          <div>
            <Image src="/man2.png" alt="image" width="150" height="100" className="mx-auto"/>
          </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>Gender Equality</h1>
          <p>Advocacy</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
