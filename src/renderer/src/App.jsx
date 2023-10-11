// import data from "./assets/data";
// import FetchData from "./components/FetchData";
import MailDashboard from "./components/MailDashboard";
import React,{useState,useEffect} from "react";

import {  fetchDataFromFirebase} from "./services/useFirebase.js";

// const addData = async () => {
//   for (const item of data) {
//     await addDataToFirebase(item);
//   }
// };

// addData().then(() => {
//   console.log("Data added to Firebase.");
// });


function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchAndPrintData = async () => {
      try {
        const data = await fetchDataFromFirebase();

        if (data.length > 0) {
          // Set the fetched data in the state
          console.log(data);
          setEmails(data);
        } else {
          console.log("No data found in Firebase.");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchAndPrintData();
  }, []); // The empty dependency array makes sure this effect runs only once

  return (
    <>
      <div className='App w-full'>
  
        <MailDashboard mails={emails} />
      </div>
    </>
  );
}

export default App;
