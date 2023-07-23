
import React, { useCallback } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestToPayAsync from "../src/components/mtn/requestToPay"
import TransactionStatus from "../src/components/mtn/transactionStatus";
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../firebaseConfig'

function ContactUs() {

  const [mssid, setMSSID] = useState()
  const [mtnTransactionID, setMtnTransactionID] = useState("");
	const [isPayerConfirmationNeeded, setIsPayerConfirmationNeeded] = useState(false);
	
  const initialState={
    name: '',
     address: '',
     city: '',
     country: '',
     county: '',
     email: '',
     number: '',
     childName: '',
     girlChild: 'Girl',
     boyChild: 'Boy',
     child:'',
     eitherChild:'ether',
     teenage:'TeenAge',
     generalDonation:'',
     donation50:50,
     donation100:100,
     donation500:500,
     donation1000:1000,
     donationOther:'',
     monthlyPayment:'',
     selfPayment:'',
     specificCity:'',
     payment_method: '',
     place: '',
     signature: '',
     name2: ''
  }
  const [formState, setFormState] = useState(initialState)

  const donation  = collection(db, "Donation")

  const handleSubmit = (e) => {

    addDoc(donation, {...formState})
    console.log(formState)
    setFormState(initialState)

		e.preventDefault();
		if (formState.name.trim() == "") {
			toast.error("Please fill out this field it is required");
			return;
		}
		if (formState.address.trim() == "") {
			toast.error("Please fill out this field it is required");
			return;
		}
		if (formState.email.trim() == "") {
			toast.error("Please fill out this field it is required");
			return;
		}
		if (formState.city.trim() == "") {
			toast.error("Please fill out this field it is required");
			return;
		}
		console.log(formState);
		setFormState({
			name: "",
			address: "",
			city: "",
			country: "",
			county: "",
			email: "",
			number: "",
			childName: "",
			child: "",
			child1: "",
			donation: "",
			num1: "",
			payment: "",
			place: "",
			signature: "",
			name2: "",
		});
		toast.success("Form submitted Successfully");
	};

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  const handlePayment = () => {
    if (!isPayerConfirmationNeeded && mssid) {
      // Replace "50" with the actual selected donation amount from the form state
      const donationAmount = formState.donation50
        ? 50
        : formState.donation100
        ? 100
        : formState.donation500
        ? 500
        : formState.donation1000
        ? 1000
        : 0;

      if (donationAmount > 0) {
        RequestToPayAsync(mssid, donationAmount)
          .then((data) => {
            if (data) {
              setMtnTransactionID(data.transactionID);
              setIsPayerConfirmationNeeded(true);
            }
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        alert("Please select a valid donation amount.");
      }
    }
  }


  return (
    <div>
    <div className='sm:mt-32 mt-16'>
    <h1 className='sm:text-5xl sm:mt-64 font-bold text-center text-2xl'>
      Sponsorship Application Form
    </h1>
    <h1 className='sm:text-5xl ml-20 font-serif'>Contact Us</h1>
    <div className='sm:p-12 sm:mx-32 p-4'>
      <form onSubmit={handleSubmit}>
        <table className='sm:block sm:mx-auto'>
          <tr>
            <td>
              <label htmlFor='name'>Name*</label>
            </td>
            <td>
              <label htmlFor='address'>Address*</label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                id='name'
                required
                type='text'
                name='name'
                placeholder='Name'
                value={formState.name}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
            <td>
              <input
                id='address'
                required
                type='address'
                name='address'
                placeholder='Address'
                value={formState.address}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 rounded-md w-full m-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='city'>City*</label>
            </td>
            <td>
              <label htmlFor='county'>County*</label>
            </td>
            <td>
              <label htmlFor='country'>Country*</label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                id='city'
                type='text'
                name='city'
                required
                placeholder='City'
                value={formState.city}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
            <td>
              <input
                id='county'
                type='text'
                name='county'
                required
                placeholder='County'
                value={formState.county}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 m-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
            <td>
              <input
                id='country'
                type='text'
                name='country'
                required
                placeholder='Country'
                value={formState.country}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 m-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='email'>Email*</label>
            </td>
            <td>
              <label htmlFor='number'>Phone*</label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                id='email'
                type='text'
                name='email'
                required
                placeholder='Email'
                value={formState.email}
                onChange={handleInputChange}
                className='border border-gray-400 p-2 m-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </td>
            <td>
              <input
                id='number'
                type='number'
             name='number'
             required
              placeholder='Enter your number'
              value={formState.number}
              onChange={handleInputChange}
            className='border border-gray-400 p-2 m-6 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/>
     </td>
        </tr>
        </table>
        </form>
        </div>
        <div className='sm:p-12 sm:mx-32'>
        <h1 className='font-bold sm:text-4xl sm:text-left text-center text-2xl m-4'>
        <i>Sponsorship Details</i>
        </h1>
        <form onSubmit={handleSubmit} className='sm:block p-4'>
        <input
          id='childName'
          type='checkbox'
          name='childName'
          value={formState.childName}
          required='Please fill in this box'
          className='mr-2'
          // checked={formState.childName}
          onChange={handleInputChange}
        />
        <label htmlFor='childName' className='font-bold text-xl'>
          I already know my child, name of child:
        </label>
        <h1 className='font-bold text-xl'>I would like to help a:</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  id='girlChild'
                  type='checkbox'
                  name='girlChild'
                  value={formState.girlChild}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.girlChild}
                  onChange={handleInputChange}
                />
                <label htmlFor='girlChild' className='font-bold text-xl'>
                  Girl
                </label>
              </td>
              <td>
                <input
                  id='boyChild'
                  type='checkbox'
                  name='boyChild'
                  value={formState.boyChild}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.boyChild}
                  onChange={handleInputChange}
                />
                <label htmlFor='boyChild' className='font-bold text-xl'>
                  Boy
                </label>
              </td>
              <td>
                <input
                  id='eitherChild'
                  type='checkbox'
                  name='eitherChild'
                  value={formState.etherChild}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.eitherChild}
                  onChange={handleInputChange}
                />
                <label htmlFor='eitherChild' className='font-bold text-xl'>
                  Either
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  id='child'
                  type='checkbox'
                  name='child'
                  value={formState.child}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.child}
                  onChange={handleInputChange}
                />
                <label htmlFor='child' className='font-bold text-xl'>
                  Child
                </label>
              </td>
              <td>
                <input
                  id='teenage'
                  type='checkbox'
                  name='teenage'
                  value={formState.teenage}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.teenage}
                  onChange={handleInputChange}
                />
                <label htmlFor='teenage' className='font-bold text-xl'>
                  Teenage
                </label>
              </td>
              <td>
                <input
                  id='specificCity'
                  type='checkbox'
                  name='specificCity'
                  value={formState.specificCity}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.specificCity}
                  onChange={handleInputChange}
                />
                <label htmlFor='specificCity' className='font-bold text-xl'>
                  From a specific city
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan='3'>
                <input
                  id='generalDonation'
                  type='checkbox'
                  name='generalDonation'
                  value={formState.generalDonation}
                  required='Please fill in this box'
                  className='mr-2'
                  // checked={formState.generalDonation}
                  onChange={handleInputChange}
                />
                <label htmlFor='generalDonation' className='font-bold text-xl'>
                  I just want to make a general monthly donation:
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      
</div>
<div className='sm:p-12 sm:mx-32'>
<h1 className='sm:text-left text-center font-bold text-4xl'>Donation Details</h1>
<h1 className='sm:text-left text-center text-2xl pt-4 font-bold'>Sponsorship</h1>
<form onSubmit={handleSubmit} className='m-4 ml-'>
  <table>
    <tbody>
      <tr>
        <td>
          <input
            id='donation50'
            type='checkbox'
            name='donation50'
            value={formState.donation50}
            required='Please fill in this box'
            className='m-2'
            // checked={formState.donation50}
            onChange={handleInputChange}
          />
          <label htmlFor='donation50' className='font-bold text-xl'>
            $50
          </label>
        </td>
        <td>
          <input
            id='donation100'
            type='checkbox'
            name='donation100'
            value={formState.donation100}
            required='Please fill in this box'
            className='m-2'
            // checked={formState.donation100}
            onChange={handleInputChange}
          />
          <label htmlFor='donation100' className='font-bold text-xl'>
            $100
          </label>
        </td>
        <td>
          <input
            id='donation500'
            type='checkbox'
            name='donation500'
            value={formState.donation500}
            required='Please fill in this box'
            className='m-2'
            // checked={formState.donation500}
            onChange={handleInputChange}
          />
          <label htmlFor='donation500' className='font-bold text-xl'>
            $500
          </label>
        </td>
      </tr>
      <tr>
        <td>
          <input
            id='donation1000'
            type='checkbox'
            name='donation1000'
            value={formState.donation1000}
            required='Please fill in this box'
            className='m-2'
            // checked={formState.donation1000}
            onChange={handleInputChange}
          />
          <label htmlFor='donation1000' className='font-bold  text-xl'>
            $1000
          </label>
        </td>
        <td>
          <input
            id='donationOther'
            type='checkbox'
            name='donationOther'
            value={formState.donationOther}
            required='Please fill in this box'
            className='m-2'
            // checked={formState.donationOther}
            onChange={handleInputChange}
          />
          <label htmlFor='donationOther' className='font-bold text-xl'>
            Other amount
          </label>
        </td>
      </tr>
    </tbody>
  </table>
  <h1 className='font-bold text-4xl m-8'>Payment Method</h1>
  <input
    id='monthlyPayment'
    type='checkbox'
    name='monthlyPayment'
    value={formState.monthlyPayment}
    required='Please fill in this box'
    className='m-2'
    checked={formState.monthlyPayment}
    onChange={handleInputChange}
  />
  <label htmlFor='monthlyPayment' className='font-bold text-xl'>
    I would like CHF to setup the monthly Payments
  </label>
  <br />
  <input
    id='selfPayment'
    type='checkbox'
    name='selfPayment'
    value={formState.selfPayment}
    required='Please fill in this box'
    className='m-2'
    checked={formState.selfPayment}
    onChange={handleInputChange}
  />
  <label htmlFor='selfPayment' className='font-bold text-xl'>
    I choose to setup a monthly payment myself (Bank information will be sent to you)
  </label>
</form>
<div>
<div className="m-2 p-5 bg-slate-700">
  <label htmlFor="mobile_money" className="font-bold text-xl mr-5"> <span className="text-yellow-500">LoneStar</span> <span className="text-white">Mobile Money</span> 
    <input
    className="m-2 text-center"
     placeholder="Enter your number"
      id="mobile_money"
      type="number"
      value={mssid}
      onChange={(e) => setMSSID(e.currentTarget.value)}
    />
  </label>
  <button  className="bg-yellow-500 p-2 rounded-2xl text-xl font-bold hover:text-white hover:bg-yellow-700" onClick={handlePayment}>
    {isPayerConfirmationNeeded ? "Comfirm Payment" : "Pay Now"}
  </button>
</div>
</div>
      </div>
      <h1 className='sm:mx-32 text-center font-bold text-4xl'>Signature and Authorization</h1>
      <form onSubmit={handleSubmit} className='p-12 sm:mx-32 block sm:flex'>
      <label htmlFor='place'>
      Place/Date*
      <br/>
      <input
                 id='place'
                 type='text'
                 name='place'
                 required='Please fill in this field'
                 className='border border-gray-400 p-2 m-4 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500'
                 value={formState.place}
                 onChange={handleInputChange}
               />
      </label>
      <label htmlFor='signature'>
      Signature*
      <br/>
      <input
                 id='signature'
                 type='text'
                 name='signature'
                 required='Please fill in this field'
                 className='border border-gray-400 p-2 m-4 sm:ml-8 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500'
                 value={formState.signature}
                 onChange={handleInputChange}
               />
      </label>
      <br />
      <label htmlFor='name2'>
      Name*
      <br/>
      <input
                 id='name2'
                 type='text'
                 name='name2'
                 required='Please fill in this field'
                 className='border border-gray-400 p-2 m-4 sm:ml-12 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500'
                 value={formState.num2}
                 onChange={handleInputChange}
               />
      </label>
      </form>
      <p className='text-center font-bold m-16'>
      Marshall, Margibi County, Liberia, West | Africa /<br />
      Tel: (+231)775-666-741 / 886-917-439 / +19155172217 /<br />

      Email: sponsors@childhope.org / www.childhope.org
      </p>
      <div onClick={handleSubmit} className='sm:text-2xl text-center sm:text-left text-4xl bg-blue-500 hover:bg-blue-700 text-white  font-bold py-4 px-8 sm:my-16 sm:mx-16 m-4 sm:w-36 rounded'>
      <button> Submit</button>
      </div>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default ContactUs;
