import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDizQCQZQk_Nl2N7iPP0m3i_rfWhyFAS9E",
  authDomain: "todolistwithvalidation.firebaseapp.com",
  projectId: "todolistwithvalidation",
  storageBucket: "todolistwithvalidation.firebasestorage.app",
  messagingSenderId: "374265725314",
  appId: "1:374265725314:web:83c82de94165c9606e8f9b",
  measurementId: "G-146ZWLGMYM"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };