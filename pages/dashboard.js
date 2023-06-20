import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

const drawerWidth = 240;

const defaultTheme = createTheme();

const DashboardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(28),
  marginBottom: theme.spacing(17)
}));

const DocumentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Donation'));
      const documents = [];
      querySnapshot.forEach((doc) => {
        const documentData = doc.data();
        const donation50 = documentData.donation50;
        const donation100 = documentData.donation100;
        const donation500 = documentData.donation500;
        const donation1000 = documentData.donation1000;
        if(donation50=== 50 || donation100=== 100 || donation500 ===500 || donation1000===1000){
          
          const documentObj = {
            id: doc.id,
            ...documentData,
          };
          documents.push(documentObj);
        }
      });
      setData(documents);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Donation', id));
      setData(data.filter((document) => document.id !== id));
      console.log('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting data', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <DashboardContainer>
        {data.map((document) => (
          <DocumentCard key={document.id}>
            <Typography variant="h5">Name: {document.name}</Typography>
            <Typography variant="body1">Address: {document.address}</Typography>
            <Typography variant="body1">City: {document.city}</Typography>
            <Typography variant="body1">Country: {document.country}</Typography>
            <Typography variant="body1">Donation: {document.donation50}</Typography>
            <Typography variant="body1">Donation: {document.donation100}</Typography>
            <Typography variant="body1">Donation: {document.donation500}</Typography>
            <Typography variant="body1">Donation: {document.donation1000}</Typography>
            {/* Add other fields as needed */}
            <button onClick={() => handleDelete(document.id)}>Delete</button>
          </DocumentCard>
        ))}
      </DashboardContainer>
    </ThemeProvider>
  );
}
