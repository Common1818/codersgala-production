import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
  apiKey: "AIzaSyCtDwp5-R_wP5shKC5n3addUtmzMDIP5SQ",
  authDomain: "codersgala.firebaseapp.com",
  databaseURL: "https://codersgala.firebaseio.com",
  projectId: "codersgala",
  storageBucket: "codersgala.appspot.com",
  messagingSenderId: "201431033087",
  appId: "1:201431033087:web:fb8584684521d84bfe18ca",
  measurementId: "G-NGKVQSKSC6",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
