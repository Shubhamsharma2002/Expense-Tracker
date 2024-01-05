import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDreAg01EFt2MEw6QfbpCJRxfDTIzwImKQ",
  authDomain: "expense-tracker-app-12824.firebaseapp.com",
  projectId: "expense-tracker-app-12824",
  storageBucket: "expense-tracker-app-12824.appspot.com",
  messagingSenderId: "732873858215",
  appId: "1:732873858215:web:1a442756e4d94068ddcf82"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDreAg01EFt2MEw6QfbpCJRxfDTIzwImKQ",
//   authDomain: "expense-tracker-app-12824.firebaseapp.com",
//   projectId: "expense-tracker-app-12824",
//   storageBucket: "expense-tracker-app-12824.appspot.com",
//   messagingSenderId: "732873858215",
//   appId: "1:732873858215:web:1a442756e4d94068ddcf82"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);