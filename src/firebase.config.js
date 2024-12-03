import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWdgKAq8y9qvO3218hRTSwYJMt7iKbFs",
  authDomain: "house-marketplace-app-85cb0.firebaseapp.com",
  projectId: "house-marketplace-app-85cb0",
  storageBucket: "house-marketplace-app-85cb0.firebasestorage.app",
  messagingSenderId: "321283710016",
  appId: "1:321283710016:web:6d70b9ace2a2da26dad3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()