import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function Founder() {
  
  

  return (
    <div>
    <div className='sm:mt-32 mt-16'>
        <h1 className='text-center font-bold text-6xl p-4'>About Our Founder</h1>
        <div className='m-auto ' >
        <Image src="/news12.png" width="400" height="200" alt="char weah" className='m-auto items-center p-2'/>
      </div>
        <div className='m-2 sm:p-4 sm:text-center '>
          <p className='m-2 text-xl h-full flex flex-col justify-center'>
            A Nurse by profession, successful businesswoman,
             and humanitarian, Mrs. Clar M. Weah&apos;s passion to help the underprivileged dates 
             long before becoming First Lady in 2018. Mrs. Weah, whose motto is &apos;To bless as many
              children as God has blessed me&apos;, was helping foster children in the United States,
            Jamaica, and Africa. Her ascendency to the status as First Lady only provides a wider platform to achieve her
            purpose of improving lives.
          </p>
          <p className='m-2 text-xl h-full flex flex-col justify-center'>
            In 2018, Mrs. Weah founded &apos;Clar Hope Foundation&apos; &apos;CHF&apos; a non-political and non-profit organization,
            in an effort to create an equitable society in Liberia where women and children (in particular),
            are healthy, educated, and fully empowered to have a prosperous life.
          </p>
          <p className='m-2 text-xl h-full flex flex-col justify-center'>
            A year later, on June 20, 2019, the First Lady launched her flagship program the &apos;She&apos;s You Movement.&apos; Hinging on four pillars Health, Education,
            Economic Empowerment, and Gender Equality She&apos;s You Movement seeks the overall advancement of women and girls for a better and prosperous Liberia.
          </p>
        </div>
        <div>
          <video autoPlay="true" loop className="w-200 h-300 m-auto p-4 object-cover">
           <source src="/Char_hope.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <p className='m-4 text-xl h-full flex flex-col justify-center'>  
            After only a few years of tireless hard work in her new role, First Lady Clar Marie Weah&apos;s dream to revive the hope of Liberia&apos;s underprivileged and
            marginalized groups through quality education, vocational training, and rehabilitation, is finally in sight. The dream - to construct a multi-purpose
            facility known as &apos;City of Hope&apos; where orphans, street girls, and disadvantaged youths would be housed, educated, and transformed into constructive 
            citizens - was announced barely months after assuming the first lady role of the Republic of Liberia. The project which kicked off on June 19, 2020,
            in Marshall, Margibi County under the auspices of Mrs. Weah&apos;s charity, Clar Hope Foundation is now nearing completion. The City of Hope project 
            includes dormitories, academic and vocation school buildings, recreational centers, administrative buildings, clinics, theatres, and bungalows among
            others. The overall construction work is currently at 85 percent. Inspecting the project recently, Mrs. Weah expressed delight over the massive progress
            being made and gratitude to the contractors for their commitment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Founder
