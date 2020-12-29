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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;