// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMid51Fsq8nrsSAB4kCpLpxPFJXUyTSyg",
  authDomain: "challenge-a17c7.firebaseapp.com",
  projectId: "challenge-a17c7",
  storageBucket: "challenge-a17c7.appspot.com",
  messagingSenderId: "292001177751",
  appId: "1:292001177751:web:712516a3825d638e5409d2",
  measurementId: "G-FV08BQY3NL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
