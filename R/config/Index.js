// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1IyQmFocLlPFyuxQcnCUain2bb1kHQCM",
  authDomain: "steakytmd.firebaseapp.com",
  projectId: "steakytmd",
  storageBucket: "steakytmd.appspot.com",
  messagingSenderId: "672210923527",
  appId: "1:672210923527:web:a419a2a9a3c288fb9a7aa2",
  measurementId: "G-5YH9PZPYKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;