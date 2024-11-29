// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8mb2duYt9_JKvebL7yjGkzBM4i95kYLM",
  authDomain: "react-netflix-clone-dee0c.firebaseapp.com",
  projectId: "react-netflix-clone-dee0c",
  storageBucket: "react-netflix-clone-dee0c.firebasestorage.app",
  messagingSenderId: "1097438817157",
  appId: "1:1097438817157:web:98b71c0b4693117abf72ec",
  measurementId: "G-FW6NMZEV4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
