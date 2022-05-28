import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { createUserDoc } from './helpers';

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
export const signInWithGooglePopup = () => {
  const { user } = signInWithPopup(auth, provider);
  createUserDoc(user);
};

export const signInUserWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmailAndPassword = (email, password, displayName) => {
  const { user } = createUserWithEmailAndPassword(auth, email, password);
  const photoURL = `https://avatars.dicebear.com/api/big-smile/${user.uid}.svg`;
  createUserDoc({ ...user, displayName, photoURL });
};

export const db = getFirestore();
