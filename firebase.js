// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCa0yPF3jHc9K6MIRiSfnUJL1XFROz20M",
  authDomain: "instacloneyue.firebaseapp.com",
  projectId: "instacloneyue",
  storageBucket: "instacloneyue.appspot.com",
  messagingSenderId: "389509211706",
  appId: "1:389509211706:web:b3c1195161b3aef43d7703",
  measurementId: "G-MSD6KJWG8H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();
export { app, db, storage};