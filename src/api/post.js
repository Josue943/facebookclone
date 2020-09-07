import db from '../firebase';
import firebase from 'firebase';

const dbRef = db.collection('posts');

const createPost = async post => {
  await dbRef.add(post);
};

const commentsCounter = async (postId, increment = 1) => {
  await dbRef.doc(postId).update({
    totalComments: firebase.firestore.FieldValue.increment(increment),
  });
};

export default {
  createPost,
  commentsCounter,
};
