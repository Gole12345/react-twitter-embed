// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  aapiKey: "AIzaSyCcFP4PuVR42Bg3q54OphWCZt2F4bH1kmU",
  authDomain: "xclone-c57c9.firebaseapp.com",
  projectId: "xclone-c57c9",
  storageBucket: "xclone-c57c9.firebasestorage.app",
  messagingSenderId: "492574864956",
  appId: "1:492574864956:web:df4409acd679d022937539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;