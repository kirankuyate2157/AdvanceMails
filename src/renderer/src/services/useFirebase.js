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

// Function to fetch data from Firebase
const fetchDataFromFirebase = async () => {
  try {
    const emailsRef = collection(db, "emails"); // Replace "emails" with your database collection name
    const querySnapshot = await getDocs(emailsRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export { addDataToFirebase, fetchDataFromFirebase };
