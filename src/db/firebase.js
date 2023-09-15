import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1IbAa8h7N-f4tBoMQEXKKSI-nfLWF5DY",
  authDomain: "entrega-final-coder-a151e.firebaseapp.com",
  projectId: "entrega-final-coder-a151e",
  storageBucket: "entrega-final-coder-a151e.appspot.com",
  messagingSenderId: "1050727368034",
  appId: "1:1050727368034:web:493ee54bf56b4b3d5e983b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
