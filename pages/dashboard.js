import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

const DashBoard = () => {
  const [applicationData, setApplicationData] = useState([]);
  const [donationData, setDonationData] = useState([]);
  const [application, setApplication] = useState(true);
  const [donation, setDonation] = useState(true);

  const handleApplication = () => {
    setApplication(true);
    setDonation(false);
  };

  const handleDonation = () => {
    setApplication(false);
    setDonation(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const applicationQuerySnapshot = await getDocs(collection(db, 'ApplicationData'));
      const applicationDocuments = [];
      applicationQuerySnapshot.forEach((doc) => {
        const documentData = doc.data();
        const documentObj = {
          id: doc.id,
          ...documentData,
        };
        applicationDocuments.push(documentObj);
      });
      setApplicationData(applicationDocuments);

      const donationQuerySnapshot = await getDocs(collection(db, 'Donation'));
      const donationDocuments = [];
      donationQuerySnapshot.forEach((doc) => {
        const documentData = doc.data();
        const documentObj = {
          id: doc.id,
          ...documentData,
        };
        donationDocuments.push(documentObj);
      });
      setDonationData(donationDocuments);
    };

    fetchData();
  }, []);

  const handleDelete = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));

      if (collectionName === 'Donation') {
        setDonationData((prevData) => prevData.filter((document) => document.id !== id));
      } else if (collectionName === 'ApplicationData') {
        setApplicationData((prevData) => prevData.filter((document) => document.id !== id));
      }

      console.log('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting data', error);
    }
  };

  const renderApplicationData = () => {
    if (application) {
      return (
        <div>
          {applicationData.map((documentf) => (
            <div key={documentf.id}>
            <h1 className='text-xl'>Name: {documentf.firstName} {documentf.lastName}</h1>
            <p>Email: {documentf.email}</p>
            <p>Honoree: {documentf.honoree}</p>
            <p>Donate Type: {documentf.donate_type}</p>
            <p>Text Info: {documentf.dataText}</p>
              {/* Add other application data rendering */}
              <Button onClick={() => handleDelete('ApplicationData', documentf.id)} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderDonationData = () => {
    if (donation) {
      return (
        <div>
          {donationData.map((document) => (
            <div key={document.id}>
            <h1 className='text-xl'>Name: {document.name}</h1>
            <p>Address: {document.address}</p>
            <p>City: {document.city}</p>
            <p>Country: {document.country}</p>
            <p>Donation: {document.donation50}</p>
            <p>Donation: {document.donation100}</p>
            <p>Donation: {document.donation500}</p>
            <p>Donation: {document.donation500}</p>
            <p>Donation: {document.donation1000}</p>
              {/* Add other donation data rendering */}
              <Button onClick={() => handleDelete('Donation', document.id)} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='sm:mt-32 mt-16 sm:mb-32 mb-72 '>
      <div className='bg-blue-200 sm:p-4 p-2'>
        <h1 className='text-center text-4xl font-bold'>Admin Dashboard</h1>
      </div>
      <div>
        <div className='text-xl sm:p-4 sm:m-4'>
          <button className='hover:border-blue-700 hover:border-2 bg-pink-200 shadow-xl sm:m-2 sm:p-2 rounded-xl'>
            <Link href="/">Home</Link>
          </button>
          <button onClick={handleApplication} className='hover:border-blue-700 hover:border-2 bg-pink-200 shadow-xl sm:m-2 m-2 sm:p-2 w-30 rounded-xl'>
            <Link href="">Application Data</Link>
          </button>
          <button onClick={handleDonation} className='hover:border-blue-700 hover:border-2 bg-pink-200 shadow-xl sm:m-2 sm:p-2 w-30 rounded-xl'>
            <Link href="">Donation Info</Link>
          </button>
        </div>
      </div>
      <div className='sm:m-8'>
        {renderApplicationData()}
        {renderDonationData()}
      </div>
    </div>
  );
};

export default DashBoard;
