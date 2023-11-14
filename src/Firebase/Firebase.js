import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

// const firebaseConfig = {
//   apiKey: "AIzaSyDoN-nSGUo_1h87nkOXSXX2vv4IBXBXey0",
//   authDomain: "chatify-49.firebaseapp.com",
//   projectId: "chatify-49",
//   storageBucket: "chatify-49.appspot.com",
//   messagingSenderId: "1034185885241",
//   appId: "1:1034185885241:web:a46af138b7a40d318defe8",
//   measurementId: "G-EHQ2YBVYY9",
// };

const firebaseConfig = {

  apiKey: "AIzaSyDzlbjGN0vz0sqqALVxySggy9fLSJcKbg0",

  authDomain: "chatify-8ee88.firebaseapp.com",

  projectId: "chatify-8ee88",

  storageBucket: "chatify-8ee88.appspot.com",

  messagingSenderId: "883805091807",

  appId: "1:883805091807:web:6e9ec111bc28c36077766a",

  measurementId: "G-84KEZ939NT"

};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
