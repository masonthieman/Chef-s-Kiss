// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIhGSKM7RNQSOstcO4uE3rgq7tpN9-ZY",
  authDomain: "chef-s-kiss-83282.firebaseapp.com",
  projectId: "chef-s-kiss-83282",
  storageBucket: "chef-s-kiss-83282.firebasestorage.app",
  messagingSenderId: "612307166381",
  appId: "1:612307166381:web:3e6a83f7d607956c775224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);