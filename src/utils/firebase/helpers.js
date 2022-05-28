import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { success, failure } from '../toasts';

export const createUserDoc = async (userAuth) => {
  try {
    const { displayName, email, photoURL, uid } = userAuth;

    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) return;

    const USER_INITIAL_DATA = {
      displayName,
      email,
      photoURL,
      workspace: {
        folders: [],
        notes: [],
      },
      bio: '',
    };
    await setDoc(userDocRef, USER_INITIAL_DATA);
    success('Signed up successfully');
  } catch (error) {
    console.error(error.message);
    failure('Something went wrong! Try again later');
  }
};
