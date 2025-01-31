import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2mZfe3WhwLy7yGSTSHDtsNd7HsRf0Efg",
  authDomain: "house-marketplace-app-c2d20.firebaseapp.com",
  projectId: "house-marketplace-app-c2d20",
  storageBucket: "house-marketplace-app-c2d20.firebasestorage.app",
  messagingSenderId: "875844212348",
  appId: "1:875844212348:web:75ddf723ba2a27d2369bf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
