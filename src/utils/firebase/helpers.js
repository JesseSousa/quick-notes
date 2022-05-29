import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

// don't return anything, just throw errors
export const createUserDoc = async (userAuth) => {
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
};
