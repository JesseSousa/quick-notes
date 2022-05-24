import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBdjw7-hNqt5YGiSw27Ezjr8VlcG0Bmbp0',
  authDomain: 'quick-notes-26c52.firebaseapp.com',
  projectId: 'quick-notes-26c52',
  storageBucket: 'quick-notes-26c52.appspot.com',
  messagingSenderId: '171813789663',
  appId: '1:171813789663:web:163bb6acd2b66aee1dee6a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInUserWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUpWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const { displayName, email, photoURL, uid } = userAuth;
  const userDocRef = doc(db, 'users', uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    setDoc(userDocRef, {
      displayName,
      email,
      photoURL,
      workspace: {
        folders: [],
        notes: [],
      },
      bio: '',
    });
  }

  return userSnapshot;
};
