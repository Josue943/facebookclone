import firebase from 'firebase';

import db from '../firebase';

const dbRef = db.collection('posts');

const likePost = async (postId, userId) => {
  await dbRef.doc(postId).update({
    likes: firebase.firestore.FieldValue.arrayUnion(userId),
  });
};

const dislikePost = async (postId, userId) => {
  await dbRef.doc(postId).update({
    likes: firebase.firestore.FieldValue.arrayRemove(userId),
  });
};

export default {
  likePost,
  dislikePost,
};
