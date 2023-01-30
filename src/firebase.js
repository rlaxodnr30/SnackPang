import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaqH0DOBxt5U-IG-kJlemlMEsAcuma8A0",
  authDomain: "pro2-45859.firebaseapp.com",
  projectId: "pro2-45859",
  storageBucket: "pro2-45859.appspot.com",
  messagingSenderId: "22016341095",
  appId: "1:22016341095:web:159589bf20718fdfcb90c2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
