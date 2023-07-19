import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LayoutDefault() {
  return (
    <div className ="">
    <div className="">
    <div className ="m-2 block">
    <video autoPlay={true} loop className="w-500 sm:w-full h-300 sm:h-full object-cover">
       <source src="/Char_hope.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   </div>
   <div className="block sm:flex justify-center text-center z-10 top-50% ">
     <Link href="/donate"><button className="p-2 bg-black text-white sm:text-2xl font-bold m-2 sm:m-4 sm:block underlin hover:bg-white hover:text-black">Donate Now!</button></Link>
     <Link href="/application"><button className="p-2 bg-black text-white sm:text-2xl font-bold sm:ml-8 sm:m-4 sm:block hover:bg-white hover:text-black">Applied!</button></Link>
     <Link href="/login"><button className="p-2 bg-black text-white sm:text-2xl font-bold sm:ml-8 m-2 sm:m-4 sm:block hover:bg-white hover:text-black">Dashboard</button></Link>
   </div>
    </div>
    <div className="sm:flex block">
    <div className="text-center p-4">
      <Image src="/help.jpg" alt="this is a img tag" width="100" height="100" className="mx-auto"/>
      <h1 className="font-bold text-2xl">Make Donation </h1>
      <p>It&apos;s not how much we give but how much love we put into giving.</p>
    </div>
    <div className="text-center p-4">
      <Image src="/donate.jpg" alt="welcome" width="100" height="100" className="mx-auto"/>
      <h1 className="font-bold text-2xl">Fundraising </h1>
      <p>It&apos;s not how much we give but how much love we put into giving.</p>
    </div>
    <div className="text-center p-4">
      <Image src="/help2.jpg" alt="Hi there" width="100" height="100" className="mx-auto"/>
      <h1 className="font-bold text-2xl">Become A Volunteer</h1>
      <p>It&apos;s not how much we give but how much love we put into giving.</p>
    </div>
  </div>
        <h1 className="text-center font-bold text-2xl sm:text-4xl p-8">Our Charity</h1>
        <div className="sm:flex block sm:p-8 text-center">
          <div className="">
             <Image src="/children.png" alt="say" width="400" height="200" className="m-auto"/>
             <h1 className="font-bold text-xl p-4">She&apos;s You Menstrual & Personal
             Hygiene Initiative</h1>
             <p>Reproductive Health - Menstrual
             Hygiene Management (MHM).
             Creating an inclusive society
             where women and girls can
             share their knowledge and
             challenges in line with
             menstruation.</p>
          </div>
              <div className="sm:p-4 pt-4">
                <Image src="/china.png" alt="china.png" width="400" height="200" className="m-auto"/>
                <h1 className="font-bold text-xl p-4">Empowerment Program</h1>
                <p className='p-2'>Training of 30 adolescent girls  in China.
                Aimed to provide basic life skills to enable girls to make a decent living and improving their lives.
                The one-month intensive training in industrial hair,
                production was fully funded by the Clar Hope Foundation in 2019.</p>
              </div>
              <div className="sm:p-4">
              <Image src="/children2.png" alt="children2.png" width="400" height="200" className="sm:pl-2 m-auto sm:items-center"/>
              <h1 className="font-bold text-xl p-4">The CHF is lunching a She&apos;s You Project</h1>
              <p className='p-2'>Educating and empowering the most vulnerable
              women and girls and particularly those living with disabilities. 
              The CHF believes that young girls should not
              be left alone to make these tough choices. 
              They should be supported.</p>
            </div>
            <div className="sm:p-4">
            <Image src="/children3.jpg" alt="Annotation.png" width="400" height="200" className="m-auto sm:items-center"/>
            <h1 className="font-bold text-xl p-4">Building School</h1>
            <p>Children/Orphanages. Enabling a decent residential and learning
            environment for orphans and other less fortunate children.
            Food and non-Food Supplies to Orphanages and medical facilities.</p>
          </div>
        </div>
          <h1 className="text-center font-bold text-2xl sm:text-4xl p-4">Latest News</h1>
          <div className="sm:flex block text-center grid-rows-3 sm:m-4 sm:p-4 justify-items-center align-items-center">
  <div className="sm:p-4 sm:m-2">
    <Image src="/city_of_hope.jpeg" alt="jpeg" width="400" height="200" className="m-auto"/>
    <h1 className="font-bold text-xl">City Of Hope</h1>
    <p>Aims to accommodate Disadvantage girls and Orphans at 85% completion. Empowering girls with Skills.</p>
  </div>
  <div>
    <Image src="/city_of_hope2.png" alt="2.png" width="400" height="200" className="mx-auto"/>
    <h1 className="font-bold text-xl">City Of Hope</h1>
    <p>A multipurpose complex under Construction by Clar Hope Foundation to provide quality education to 200 girls ages 3-5 and life skills to street girls and disadvantaged youth thereby restoring their hope for a brighter future.</p>
  </div>
  <div>
    <Image src="/city_of_hope3.jpeg" alt="WhatsApp2.jpeg" width="400" height="200" className="mx-auto"/>
    <h1 className="font-bold text-xl">City Of Hope</h1>
  </div>
</div>

    </div>

  )
}

export default LayoutDefault
