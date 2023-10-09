// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU60zLR_rV9oE_7CHohRNCjr9Hgm4MkR4",
  authDomain: "b8a9-event-management-9473d.firebaseapp.com",
  projectId: "b8a9-event-management-9473d",
  storageBucket: "b8a9-event-management-9473d.appspot.com",
  messagingSenderId: "710613337541",
  appId: "1:710613337541:web:6a69995ae94140fccc77ac"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);