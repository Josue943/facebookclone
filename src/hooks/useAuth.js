import { useEffect } from 'react';

import db, { auth } from '../firebase';
import { actionTypes } from '../context/reducer';
import { useAuthContext } from '../context/AuthContext';

const useAuth = () => {
  const [{ user, loading }, dispatch] = useAuthContext();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const data = await db.collection('profiles').doc(user.uid).get();
        dispatch({
          type: actionTypes.SET_USER,
          /*    user: {
            photoURL: user.photoURL,
            displayName: user.displayName,
            uid: user.uid,
          }, */
          user: data.data(),
        });
      } else {
        dispatch({ type: actionTypes.SET_USER, user: null });
      }
    });
    return () => unsuscribe();
  }, []);

  return { user, loading };
};

export default useAuth;
