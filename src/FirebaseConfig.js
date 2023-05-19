import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfwpdb7SshwJbpoews9DzXM7X-Xatb_YE",
  authDomain: "login-b0292.firebaseapp.com",
  projectId: "login-b0292",
  storageBucket: "login-b0292.appspot.com",
  messagingSenderId: "978565885670",
  appId: "1:978565885670:web:83c8b0b7c7fa7094951527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}