// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: (process.env.NEXT_PUBLIC_FIREBASE_API_KEY =
    "AIzaSyDsePCy_62pBWMlKoLViZjX4PjZ1FndYKg"),
  authDomain: (process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN =
    "rakshak-sih-3f4db.firebaseapp.com"),
  projectId: (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID =
    "rakshak-sih-3f4db"),
  storageBucket: (process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET =
    "rakshak-sih-3f4db.firebasestorage.app"),
  messagingSenderId: (process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID =
    "571556329211"),
  appId: (process.env.NEXT_PUBLIC_FIREBASE_APP_ID =
    "1:571556329211:web:d5cd9f830442272094a25e"),
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);