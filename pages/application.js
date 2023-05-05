import React from 'react'

function Application() {
  return (
    <div>
      <div>
         <div  className='bg-blue-300 mt-32 '>
           <div>
              <h1 className='text-4xl font-bold text-center pt-4'>Apply Now!</h1>
              <p className='text-center p-2 m-8 text-2xl'>“Clar Hope Foundation”, a non-political initiative, 
              aimed at creating an equitable society in Liberia, 
              by restoring the hope of disadvantaged children,
               youth and women through education, 
              health and other opportunities to better their lives.</p>
           </div>
         </div>
         <div className='block sm:flex'>
            <div className='m-16'>
              <h1 className='text-4xl font-bold'>Programs of Interest:</h1>
              <ul className='text-xl p-8'>
                <li>Health</li>
                <li>Education</li>
                <li>Economic Empowerment</li>
                <li>Gender Equality</li>
              </ul>
              <div>
                <p>Applicant should read the instruction below to know if they are  to apply.</p>
                <p>Tell us your story: why should you or recommendation be considered for the program of interest?</p>
                <textarea placeholder='Enter why we should recommend you'>
                </textarea>
              </div>
            </div>
               <div className='bg-green-900 p-8'>
                  <form>
                    <div className='p-4'>
                    <h1  className='text-center text-white text-2xl font-bold'>Support Our course</h1>
                     <h1 className='text-center text-white opacity-40 text-xl font-bold '>Leave a one-time donation</h1>
                    </div>
                     <tr>
                       <td>First Name</td>
                       <td>Last Name</td>
                     </tr>
                     <tr>
                       <td><input placeholder='First Name'/></td>
                       <td><input placeholder='Last Name'/></td>
                     </tr>
                     <tr>
                       <td>Email*</td>
                     </tr>
                     <tr>
                       <td><input placeholder='Enter Email'/></td>
                     </tr>
                     <tr>
                       <td>Donate in the name of:</td>
                     </tr>
                     <tr>
                      <section>
                        <option  name="First"/>
                      </section>
                     </tr>
                     <tr>
                       <td>Honoree Name</td>
                     </tr>
                     <tr>
                       <td><input placeholder='Enter Honoree Name'/></td>
                     </tr>
                     <tr>
                       <td>How did you hear about us</td>
                     </tr>
                     <tr>
                     <button type='submit'>Donate</button>
                   </tr>
                  </form>
               </div>
         </div>
      </div>
    </div>
  )
}

export default Application
