// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdbm9QU-tfF-Blp2pGDzk-IF2MGZWiFKQ",
  authDomain: "noter-8f455.firebaseapp.com",
  projectId: "noter-8f455",
  storageBucket: "noter-8f455.appspot.com",
  messagingSenderId: "1096380159688",
  appId: "1:1096380159688:web:140c6248b88804ac52b7fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db , "notes");