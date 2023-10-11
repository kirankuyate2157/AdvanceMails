// import data from "./assets/data";
// import FetchData from "./components/FetchData";
import MailDashboard from "./components/MailDashboard";
import {useState,useEffect} from "react";
import { addDataToFirebase, fetchDataFromFirebase} from "./services/useFirebase.js";

const addData = async () => {
  for (const item of data) {
    await addDataToFirebase(item);
  }
};

//add new mails data to firebase collections
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
          // console.log(data);
          setEmails(data);
        } else {
          console.log("No data found in Firebase.");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchAndPrintData();
  }, []); 

  return (
    <>
      <div className='App w-full'>
        <MailDashboard mails={emails} />
      </div>
    </>
  );
}

export default App;
