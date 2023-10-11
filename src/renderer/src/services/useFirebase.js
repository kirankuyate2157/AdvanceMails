import { db } from "./firebaseConfig"; // Import your db from the config file
import { collection, addDoc, getDocs } from "firebase/firestore";


// Function to add data to Firebase
const addDataToFirebase = async (data) => {
  try {
    const emailsRef = collection(db, "emails"); // Replace "emails" with your database collection name
    await addDoc(emailsRef, data);
    console.log("Data added to Firebase");
  } catch (error) {
    console.error("Error adding data: ", error);
  }
};

const fetchDataFromFirebase = async () => {
  try {
    const emailsRef = collection(db, "emails"); // Specify the collection name ("emails" in this case)
    const querySnapshot = await getDocs(emailsRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    return [];
  }
};



export { addDataToFirebase, fetchDataFromFirebase };
