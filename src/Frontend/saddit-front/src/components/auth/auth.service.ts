import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: String(process.env.REACT_APP_apiKey),
  authDomain: String(process.env.REACT_APP_authDomain),
  databaseURL: String(process.env.REACT_APP_databaseURL),
  projectId: String(process.env.REACT_APP_projectId),
  storageBucket: String(process.env.REACT_APP_storageBucket),
  messagingSenderId: String(process.env.REACT_APP_messagingSenderId),
  appId: String(process.env.REACT_APP_appId),
  measurementId: String(process.env.REACT_APP_measurementId),
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
