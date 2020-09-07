import db from '../firebase';

const dbRef = db.collection('profiles');

const createProfile = async ({ uid, displayName, photoURL }) => {
  await dbRef.doc(uid).set({ displayName, photoURL });
};

export { createProfile };
