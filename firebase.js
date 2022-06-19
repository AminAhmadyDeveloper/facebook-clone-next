import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, orderBy, query, getDoc, addDoc, updateDoc, serverTimestamp, doc } from "firebase/firestore/lite";
import { getStorage, uploadString, getDownloadURL, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MASSAGINGS_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const store = getFirestore(app);
const storage = getStorage(app);

const bucketRef = ref;
const documentRef = doc;

export { store, collection, orderBy, query, getDoc, addDoc, updateDoc, documentRef, serverTimestamp, storage, uploadString, getDownloadURL, bucketRef };