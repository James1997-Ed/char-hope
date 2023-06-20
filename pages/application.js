import React from 'react'
import {useState} from "react"
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Application() {
    const [formState, setFormState] = useState({
      firstName: '',
      lastName: '',
      email: '',
      honoree: '',
      donate_type: '',
      dataText: ''
    })

    const handleInputChange = (e)=>{
      const {name, value} = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]:value
      }))
    }

    const submission = collection (db,"ApplicationData");
  

    const handleSubmit = (e) => {
      addDoc(submission, {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        honoree: formState.honoree,
        donate_type: formState.donate_type,
        dataText: formState.dataText
      })
      
      e.preventDefault();
      if (formState.firstName.trim()== "") {
        toast.error("Form not submitted. Please fill in all required fields.");
        return;
      }
      if (formState.lastName.trim()== "") {
        toast.error("Form not submitted. Please fill in all required fields.");
        return;
      } 
      if (formState.email.trim() === '') {
        toast.error("Please enter your email.");
        return;
      }
      else {
        console.log(handleSubmit);
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          honoree: '',
          donate_type: '',
          dataText: ''
        });
        toast.success("Form submitted successfully");
      }
    };
    
  return (
    <div>
      <div>
         <div  className='bg-blue-300 mt-32 '>
           <div>
              <h1 className='text-4xl font-bold text-center pt-4'>Apply Now!</h1>
              <p className='sm:text-center p-2 sm:m-8 m-2 text-2xl'>“Clar Hope Foundation”, a non-political initiative, 
              aimed at creating an equitable society in Liberia, 
              by restoring the hope of disadvantaged children,
               youth and women through education, 
              health and other opportunities to better their lives.</p>
           </div>
         </div>
         <div className='block sm:flex'>
            <div className='sm:m-16 m-8'>
              <h1 className='text-4xl font-bold'>Programs of Interest:</h1>
              <ul className='text-xl sm:p-8 list-disc'>
                <li>Health</li>
                <li>Education</li>
                <li>Economic Empowerment</li>
                <li>Gender Equality</li>
              </ul>
              <div>
                <p className='text-xl'>Applicant should read the instruction below to know if they are  to apply.</p>
                <p className='text-xl'>Tell us your story: why should you or recommendation be considered for the program of interest?</p>
                <label htmlFor='dataText'>
                <textarea id='dataText' name="dataText" type="text" className="w-full p-4 mt-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" rows="4" placeholder='Enter why we should recommend you'>
                </textarea>
                </label>
              </div>
            </div>
               <div className='bg-green-900 sm:p-8 p-2  sm:m-12 m-2 '>
                  <form className='' onSubmit={handleSubmit} method=''>
                    <div className='p-4'>
                    <h1  className='text-center text-white text-2xl font-bold'>Support Our course</h1>
                     <h1 className='text-center text-white text-xl font-bold '>Leave a one-time donation</h1>
                    </div>
                     <tr className='block sm:flex'>
                       <label htmlFor='firstName'>
                       <td className='text-white font-bold m-2'>First Name</td>
                       </label>
                       <label htmlFor='lastName'>
                       <td className='text-white font-bold m-8'>Last Name</td>
                       </label>
                     </tr>
                     <tr className='block sm:flex'>
                       <td><input id='firstName' name="firstName" value={formState.firstName} type="text" placeholder='First Name' onChange={handleInputChange} className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/></td>
                       <td><input id='lastName' name="lastName" value={formState.lastName} type="text" placeholder='Last Name' onChange={handleInputChange} className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/></td>
                     </tr>
                     <tr className='block sm:flex'>
                     <label htmlFor='email'>
                       <td className='text-white font-bold p-2'>Email*</td>
                       </label>
                     </tr>
                     <tr className='block sm:flex'>
                       <td><input id='email' name='email' type="email" value={formState.email} onChange={handleInputChange} placeholder='Enter Email' className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/></td>
                     </tr>
                     <tr className='block sm:flex sm:pt-4'>
                     <label htmlFor="donate_type" className="font-bold text-white p-2 mb-2">Donate in the name of:</label>
                     <select id="donate_type" value={formState.donate_type} name="donate_type" onChange={handleInputChange} className="border rounded p-2">
                       <option id='opt1' className="py-2"></option>
                       <option id='opt2' value="Myself" className="sm:py-2">Myself</option>
                       <option id='opt3' value="An Organization" className="sm:py-2">An Organization</option>
                       <option id='opt4' value="other" className="sm:py-2">Other</option>
                     </select>
                     </tr>
                     <tr>
                     <label htmlFor='honoree'>
                       <td className='text-white'>Honoree Name</td>
                       </label>
                     </tr>
                     <tr>
                       <td><input id='honoree' name='honoree' value={formState.honoree} onChange={handleInputChange} placeholder='Enter Honoree Name' className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/></td>
                     </tr>
                     <tr>
                       <td className='text-white'>How did you hear about us</td>
                     </tr>
                     <tr>
                     <td>
                     <label htmlFor="dataText" className="font-bold text-white p-2 mb-2"></label>
                     <select id="dataText" value={formState.dataText} name="dataText" onChange={handleInputChange} className="border rounded p-2">
                       <option id='opt1' className="py-2"></option>
                       <option id='opt2' value="Myself" className="sm:py-2">FaceBook</option>
                       <option id='opt3' value="An Organization" className="sm:py-2">twitter</option>
                       <option id='opt4' value="other" className="sm:py-2">instagram</option>
                     </select>
                     </td>
                   </tr>
                     <div className="m-4 p-4 mx-auto px-8 py-4">
                     <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:text-2xl text-2xl mx-auto sm:px-8 py-2 px-2 sm:py-4 rounded">
                        Donate
                        </button>
                     </div>
                  </form>
                  <ToastContainer/>
               </div>
         </div>
      </div>
    </div>
  )
}

export default Application
