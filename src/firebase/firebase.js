// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_APIKEY,
  authDomain: import.meta.env.VITE_API_KEY_AUTHDOMAIN,
  projectId: import.meta.env.VITE_API_KEY_PROJECTID,
  storageBucket: import.meta.env.VITE_API_KEY_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_KEY_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_KEY_APPID,
  measurementId: import.meta.env.VITE_API_KEY_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const  db = getFirestore()