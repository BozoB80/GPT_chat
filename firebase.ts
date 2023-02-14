import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-gyppp_fd8xH0DahVfS3kxa6O6udOdEY",
  authDomain: "gpt-chat-e823f.firebaseapp.com",
  projectId: "gpt-chat-e823f",
  storageBucket: "gpt-chat-e823f.appspot.com",
  messagingSenderId: "758280524035",
  appId: "1:758280524035:web:154feec7c406a01b6d9936"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }