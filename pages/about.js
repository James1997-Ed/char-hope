import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function AboutUs() {
  return (
    <div>
      <div>
        <div className='block sm:flex m-16 pt-12 '>
          <div>
            <h1 className='sm:text-4xl text-4xl font-bold m-16 '>About Us</h1>
          </div>
         <div>
              <video autoPlay loop className="w-200  h-200 ">
              <source src="/Clar_hope.mp4" type="video/mp4" />
              Your browser does not support the video tag.
             </video>
           </div>
        </div>
        <div className='items-center' >
        <p className='m-16 sm:text-xl sm:p-2'>Clar Hope Foundation was founded in 2018 by the First Lady
         of Liberia, Madam Clar Marie Weah a non-political and non-profit
          organization, in an effort to create an equitable society in Liberia
           where women and children (in particular), are healthy, educated and
            fully empowered to have a prosperous life. Is reported making significant 
            studies with its multi-purpose complex City of hope, intended to accommodate
             disadvantaged girls and orphans at   85% completion, First Lady Clar Marie
              Weah is Passionate about improving the lives of less fortunate Liberians, 
        particularly empowering girls with education and skills.<br/>
        <Link href="/" className='text-blue-800  text-center'>Read More</Link> </p>
        </div>
        <h1 className='text-4xl text-center font-bold'>Our Motto</h1>
            <h1 className='sm:text-4xl text-center font-bold p-8'>&quot;to bless many children as God has bless me&quot;</h1>
            <div className='bg-blue-400 text-white m-2 sm:mb-4 p-8'>
            <h1 className='sm:text-4xl text-2xl text-center font-bold'>About Our Founder</h1>
        </div>
        <div className='block sm:flex'>
            <div className='items-center sm:text-xl m-4 p-8'>
                <p className='p-2'>
                    A Nurse by profession, successful business women, and Humanitarian,
                    Mrs Clar M. Weah passion to help the underprivileged dates long before
                    becoming First Lady in 2018, Mrs Weah, whose motto is &quot;To bless as many
                    children as God has Blessed me&quot;, was helping foster children in the
                    United States, Jamaica, and Africa. Her ascendency to the status as First
                    Lady only provides a wider platform to achieve her purpose of improving lives.
                </p>
                <p className='p-2'>
                    In 2018, Mrs Weah founded Clar Hope Foundation (CHF) a non-political 
                    and non-profit organization, in an effort to create an equitable society
                    in Liberia where women and children (in particular),
                    are healthy, educated, and fully empowered to have a prosperous life.
                </p>
                <p className='p-2'>
                    A year later, on June 20 2019, the First Lady launched 
                    her flagship program the &quot;She&apos;s You Movement.&quot; Hinging on 
                    four pillars - Health, Education, Economic Empowerment, and Gender 
                    Equality - She&apos;s You Movement seeks the overall advancement
                    of women and girls for a better and prosperous Liberia.<br/>
                    <Link href="/" className="text-blue-800">Read More</Link>
                </p> 
            </div>
            <div className='items-center m-4 p-8' >
              <Image src="/news12.png" width="1200" height="200" alt="char weah"/>
            </div>
        </div>
        <div className='bg-blue-400 text-white m-2 sm:mb-4 p-8'>
          <h1 className='sm:text-4xl text-2xl text-center font-bold'>Our Achievements</h1>
        </div>
        <div className='items-center sm:text-xl m-4 p-8'>
            <p className='p-2'>
            Clar Hope Foundation: Construction of Decontee Home for the Elderly,
             Constructed in Buchana, Grand Bassa County through Clar Hope Foundation,
              the 29 bed-room Home seeks to restore the 
            desired respect and dignity seniors deserve through quality care.
            </p>
            <p className='p-2'>
            City of Hope: a multipurpose complex under construction by
             Clar Hope foundation to provide quality education to 200 girls
              ages 3-5 and life skills to street girls and disadvantaged
             youth thereby restoring their hope for a brighter furture.
            </p>
            <p className='p-2'>
                Training of over 40 Medical practitioners: in partnership with Merck 
                Foundation, at least 40 medical practitioners including doctors have been trained in 
                various specialties in oncology, gynecology, embryology among others.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
