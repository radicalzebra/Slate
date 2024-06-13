import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {type DocumentData , query , where} from "firebase/firestore"
import {type Auth } from "firebase/auth"



firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
})


const auth = firebase.auth()
const firestore = firebase.firestore()


export {firebase , auth , firestore , query as firestoreQuery, where , Auth as AuthType , DocumentData}