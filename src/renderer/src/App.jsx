// import data from "./assets/data";
// import FetchData from "./components/FetchData";
import MailDashboard from "./components/MailDashboard";


import { addDataToFirebase, fetchDataFromFirebase} from "./services/useFirebase.js";

const addData = async () => {
  for (const item of data) {
    await addDataToFirebase(item);
  }
};

addData().then(() => {
  console.log("Data added to Firebase.");
});


// Call the function to fetch and print data
fetchAndPrintData();
function App() {
  return (
    <>
      <div className='App w-full'>
  
        <MailDashboard mails={data} />
      </div>
    </>
  );
}

export default App;
