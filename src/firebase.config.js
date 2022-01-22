import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAlnaGHOnHPTnOjHBJ6QYFU2Rp9uucKRuM",
  authDomain: "house-marketplace-app-455df.firebaseapp.com",
  projectId: "house-marketplace-app-455df",
  storageBucket: "house-marketplace-app-455df.appspot.com",
  messagingSenderId: "1039696959370",
  appId: "1:1039696959370:web:7a42ea384370b789525a73"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()