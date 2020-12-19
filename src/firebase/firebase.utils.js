import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC_SQcTF10Nat49QwDSajZTg4LUbv8W2YI",
    authDomain: "my-shop-8d22f.firebaseapp.com",
    projectId: "my-shop-8d22f",
    storageBucket: "my-shop-8d22f.appspot.com",
    messagingSenderId: "261165688839",
    appId: "1:261165688839:web:d78e6bb4a677d7b15822a2",
    measurementId: "G-BH9V0BT3NM"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;