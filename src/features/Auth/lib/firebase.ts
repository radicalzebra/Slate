import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {type DocumentData , query , where} from "firebase/firestore"
import {type Auth } from "firebase/auth"


firebase.initializeApp({
  apiKey: "AIzaSyDqSgxuakwWy6mAR7EnrdnvnaChdhIpO9E",
  authDomain: "slate-88367.firebaseapp.com",
  projectId: "slate-88367",
  storageBucket: "slate-88367.appspot.com",
  messagingSenderId: "237671192895",
  appId: "1:237671192895:web:fbdce20b55b4fd36899b8a",
  measurementId: "G-T9KZTJC9NY"
})

const auth = firebase.auth()
const firestore = firebase.firestore()


export {firebase , auth , firestore , query as firestoreQuery, where , Auth as AuthType , DocumentData}