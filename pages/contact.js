import React, { useCallback } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestToPayAsync from "../src/components/mtn/requestToPay"
import TransactionStatus from "../src/components/mtn/transactionStatus";
function ContactUs() {
  const [mssid, setMSSID] = useState("088776644")
  const [mtnTransactionID, setMtnTransactionID] = useState("");
	const [isPayerConfirmationNeeded, setIsPayerConfirmationNeeded] = useState(false);
	
  const [formState, setFormState] = useState({
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

  // Handle Success and Error Yourself
  const handlePayment = useCallback(() => {
    if(!isPayerConfirmationNeeded && mssid){
      // replace "100" with the donation amount
      RequestToPayAsync(mssid, "100").then(
        data => {
		  if(data){
			setMtnTransactionID(data.transactionID);
			setIsPayerConfirmationNeeded(true);
		  }
        }
      ).catch(err=>{
        alert(err)
      })
    }
    if(isPayerConfirmationNeeded){
      TransactionStatus(mtnTransactionID)
      .then(
        data => {
          if(data?.status === "SUCCESSFUL"){
            alert("Payment was successful")
            setIsPayerConfirmationNeeded(false)
          }
        }
      ).catch(err=>{
        console.log(err)
      })
    }
  }, [mtnTransactionID, isPayerConfirmationNeeded, mssid])
 
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
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

	return (
		<div>
			<div className="sm:mt-32 mt-16">
				<h1 className="sm:text-5xl sm:mt-64 font-bold text-center text-2xl">
					Sponsorship Application Form
				</h1>
				<h1 className="sm:text-5xl ml-20 font-serif">Contact Us</h1>
				<div className="sm:p-12 sm:mx-32 p-4">
					<form onSubmit={handleSubmit}>
						<table className="sm:block sm:mx-auto">
							<tr>
								<td>
									<label htmlFor="name">Name*</label>
								</td>
								<td>
									<label htmlFor="address">Address*</label>
								</td>
							</tr>
							<tr>
								<td>
									<input
										id="name"
										required
										type="text"
										name="name"
										placeholder="Name"
										value={formState.name}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
								<td>
									<input
										id="address"
										required
										type="address"
										name="address"
										placeholder="Address"
										value={formState.address}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 rounded-md w-full m-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="city">City*</label>
								</td>
								<td>
									<label htmlFor="county">County*</label>
								</td>
								<td>
									<label htmlFor="country">Country*</label>
								</td>
							</tr>
							<tr>
								<td>
									<input
										id="city"
										type="text"
										name="city"
										required
										placeholder="City"
										value={formState.city}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
								<td>
									<input
										id="county"
										type="text"
										name="county"
										required
										placeholder="County"
										value={formState.county}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 m-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
								<td>
									<input
										id="country"
										type="text"
										name="country"
										required
										placeholder="Country"
										value={formState.country}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 m-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="email">Email*</label>
								</td>
								<td>
									<label htmlFor="number">Phone*</label>
								</td>
							</tr>
							<tr>
								<td>
									<input
										id="email"
										type="text"
										name="email"
										required
										placeholder="Email"
										value={formState.email}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 m-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
								<td>
									<input
										id="number"
										type="number"
										name="number"
										required
										placeholder="Enter your number"
										value={formState.number}
										onChange={handleInputChange}
										className="border border-gray-400 p-2 m-6 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</td>
							</tr>
						</table>
					</form>
				</div>
				<div>
					<div className="m-2 p-5 bg-slate-300">
						<label htmlFor="mobile_money" className="font-bold text-xl mr-5"> Mobile Money 
							<input
								id="mobile_money"
								type="number"
								value={mssid}
								onChange={(e) => setMSSID(e.currentTarget.value)}
							/>
						</label>
						<button onClick={handlePayment}>
							{isPayerConfirmationNeeded ? "Comfirm Payment" : "Pay Now"}
						</button>
					</div>
				</div>
				<div className="sm:p-12 sm:mx-32">
					<h1 className="font-bold sm:text-4xl sm:text-left text-center text-2xl m-4">
						<i>Sponsorship Details</i>
					</h1>
					<form onSubmit={handleSubmit} className="sm:block p-4">
						<label htmlFor="childName" className="font-bold text-xl">
							<input
								id="childName"
								type="checkbox"
								name="childName"
								required="Please fill in this box"
								className="mr-2"
								value={formState.childName}
								onChange={handleInputChange}
							/>
							I already know my child, name of child:
						</label>
						<h1 className="font-bold text-xl">I would like to help a:</h1>
						<table>
							<tr>
								<td>
									<label htmlFor="child" className="font-bold text-xl">
										<input
											id="child"
											type="checkbox"
											name="child"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child}
											onChange={handleInputChange}
										/>
										Girl
									</label>
								</td>
								<td>
									<label htmlFor="child" className="font-bold text-xl">
										<input
											id="child"
											type="checkbox"
											name="child"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child}
											onChange={handleInputChange}
										/>
										Boy
									</label>
								</td>
								<td>
									<label htmlFor="child" className="font-bold text-xl">
										<input
											id="child"
											type="checkbox"
											name="child"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child}
											onChange={handleInputChange}
										/>
										Either
									</label>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="child1" className="font-bold text-xl">
										<input
											id="child1"
											type="checkbox"
											name="child1"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child1}
											onChange={handleInputChange}
										/>
										Child
									</label>
								</td>
								<td>
									<label htmlFor="child1" className="font-bold text-xl">
										<input
											id="child1"
											type="checkbox"
											name="child1"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child1}
											onChange={handleInputChange}
										/>
										Teenage
									</label>
								</td>
								<td>
									<label htmlFor="child1" className="font-bold text-xl">
										<input
											id="child1"
											type="checkbox"
											name="child1"
											required="Please fill in this box"
											className="mr-2"
											value={formState.child1}
											onChange={handleInputChange}
										/>
										From a specific city
									</label>
								</td>
							</tr>
							<tr>
								<td colSpan="3">
									<label htmlFor="donation" className="font-bold text-xl">
										<input
											id="donation"
											type="checkbox"
											name="donation"
											required="Please fill in this box"
											className="mr-2"
											value={formState.donation}
											onChange={handleInputChange}
										/>
										I just want to make a general monthly donation:
									</label>
								</td>
							</tr>
						</table>
					</form>
				</div>
				<div className="sm:p-12 sm:mx-32">
					<h1 className="sm:text-left text-center font-bold text-4xl">
						Donation Details
					</h1>
					<h1 className="sm:text-left text-center text-2xl pt-4 font-bold">
						Sponsorship
					</h1>
					<form onSubmit={handleSubmit} className="m-4 ml-">
						<table>
							<tr>
								<td>
									<label htmlFor="num1" className="font-bold text-xl">
										<input
											id="num1"
											type="checkbox"
											name="num1"
											required="Please fill in this box"
											className="m-2"
											value={formState.num1}
											onChange={handleInputChange}
										/>
										$50
									</label>
								</td>
								<td>
									<label htmlFor="num1" className="font-bold text-xl">
										<input
											id="num1"
											type="checkbox"
											name="num1"
											required="Please fill in this box"
											className="m-2"
											value={formState.num1}
											onChange={handleInputChange}
										/>
										$100
									</label>
								</td>
								<td>
									<label htmlFor="num1" className="font-bold text-xl">
										<input
											id="num1"
											type="checkbox"
											name="num1"
											required="Please fill in this box"
											className="m-2"
											value={formState.num1}
											onChange={handleInputChange}
										/>
										$500
									</label>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="num1" className="font-bold text-xl">
										<input
											id="num1"
											type="checkbox"
											name="num1"
											required="Please fill in this box"
											className="m-2"
											value={formState.num1}
											onChange={handleInputChange}
										/>
										$1000
									</label>
								</td>
								<td>
									<label htmlFor="num1" className="font-bold text-xl">
										<input
											id="num1"
											type="checkbox"
											name="num1"
											required="Please fill in this box"
											className="m-2"
											value={formState.num1}
											onChange={handleInputChange}
										/>
										Other amount
									</label>
								</td>
							</tr>
						</table>
						<h1 className="font-bold text-4xl m-8">Payment Method</h1>
						<label htmlFor="payment" className="font-bold text-xl">
							<input
								id="payment"
								type="checkbox"
								name="payment"
								required="Please fill in this box"
								className="m-2"
								value={formState.payment}
								onChange={handleInputChange}
							/>
							I would like CHF to setup the monthly Payments
						</label>
						<br />
						<label htmlFor="payment" className="font-bold text-xl">
							<input
								id="payment"
								type="checkbox"
								name="payment"
								required="Please fill in this box"
								className="m-2"
								value={formState.payment}
								onChange={handleInputChange}
							/>
							I choose to setup a monthly payment myself (Bank information will
							be sent to you)
						</label>
					</form>
				</div>
				<h1 className="sm:mx-32 text-center font-bold text-4xl">
					Signature and Authorization
				</h1>
				<form onSubmit={handleSubmit} className="p-12 sm:mx-32 block sm:flex">
					<label htmlFor="signature">
						Place/Date*
						<br />
						<input
							id="place"
							type="text"
							name="place"
							required="Please fill in this field"
							className="border border-gray-400 p-2 m-4 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500"
							value={formState.place}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor="signature">
						Signature*
						<br />
						<input
							id="signature"
							type="text"
							name="signature"
							required="Please fill in this field"
							className="border border-gray-400 p-2 m-4 sm:ml-8 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500"
							value={formState.signature}
							onChange={handleInputChange}
						/>
					</label>
					<br />
					<label htmlFor="name2">
						Name*
						<br />
						<input
							id="name2"
							type="text"
							name="name2"
							required="Please fill in this field"
							className="border border-gray-400 p-2 m-4 sm:ml-12 rounded-md focus:outline-none w-full focus:ring-2 focus:ring-blue-500"
							value={formState.num2}
							onChange={handleInputChange}
						/>
					</label>
				</form>
				<p className="text-center font-bold m-16">
					Marshall, Margibi County, Liberia, West | Africa /<br />
					Tel: (+231)775-666-741 / 886-917-439 / +19155172217 /<br />
					Email: sponsors@childhope.org / www.childhope.org
				</p>
				<div
					onClick={handleSubmit}
					className="sm:text-2xl text-center sm:text-left text-4xl bg-blue-500 hover:bg-blue-700 text-white  font-bold py-4 px-8 sm:my-16 sm:mx-16 m-4 sm:w-36 rounded"
				>
					<button> Submit</button>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
}

export default ContactUs;
