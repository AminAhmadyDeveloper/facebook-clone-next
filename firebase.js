import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, FieldValue, serverTimestamp } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXo0t4nMKzCA8R9c7wolMS2dwdRDJ0AoI",
    authDomain: "facebook-2-9c5c8.firebaseapp.com",
    projectId: "facebook-2-9c5c8",
    storageBucket: "facebook-2-9c5c8.appspot.com",
    messagingSenderId: "334892155913",
    appId: "1:334892155913:web:a430a16350e2f1ac35e4d8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const store = getFirestore(app);
const storage = getStorage(app);

export { store, collection, getDocs, addDoc, storage, serverTimestamp }