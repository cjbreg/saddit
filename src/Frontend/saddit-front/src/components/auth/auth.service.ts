import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq5Lyme0_0ZtsyUi1XmSpsO20tm71m4GE",
  authDomain: "saddit-28a0c.firebaseapp.com",
  projectId: "saddit-28a0c",
  storageBucket: "saddit-28a0c.appspot.com",
  messagingSenderId: "545100057012",
  appId: "1:545100057012:web:60fc8b804fb521b0470ae1",
  measurementId: "G-B7LR1CJ2M4",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
