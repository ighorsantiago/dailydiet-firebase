import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIsW2cKFD_x6Cffpi0KXRYDv3VuJLdFMo",
    authDomain: "dailydiet-e0c39.firebaseapp.com",
    projectId: "dailydiet-e0c39",
    storageBucket: "dailydiet-e0c39.appspot.com",
    messagingSenderId: "645052823978",
    appId: "1:645052823978:web:f7342d0955dcdd867f93d3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
