// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCoJ--JENM8AhCpCXC2c2PJ8FP049a_XUs",
    authDomain: "preppro-c5f41.firebaseapp.com",
    projectId: "preppro-c5f41",
    storageBucket: "preppro-c5f41.firebasestorage.app",
    messagingSenderId: "781762084667",
    appId: "1:781762084667:web:bb50fa3e40861566ad011e",
    measurementId: "G-1NC8XEQ4JS"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)