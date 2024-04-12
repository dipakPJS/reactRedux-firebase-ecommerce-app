// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqIcZc77JjvAzjOmXe0mkioUnu8WZk9s",
  authDomain: "reactecom-82122.firebaseapp.com",
  projectId: "reactecom-82122",
  storageBucket: "reactecom-82122.appspot.com",
  messagingSenderId: "1090136954619",
  appId: "1:1090136954619:web:9cc45e2b9764c1292ec25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }