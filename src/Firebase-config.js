// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxaOOaytZ_ugjfnDHBFqnZ2zVhqMYe238",
  authDomain: "blog-app-react-1838b.firebaseapp.com",
  projectId: "blog-app-react-1838b",
  storageBucket: "blog-app-react-1838b.appspot.com",
  messagingSenderId: "267384622387",
  appId: "1:267384622387:web:abacaa023f831097f18246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
