import db from '../firebase';
import postApi from './post';

const dbRef = db.collection('comments');

const addComment = async comment => {
  try {
    await Promise.all([
      dbRef.add({ ...comment }),
      postApi.commentsCounter(comment.postId),
    ]);
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async ({ id, postId }) => {
  try {
    await Promise.all([
      await dbRef.doc(id).delete(),
      postApi.commentsCounter(postId, -1),
    ]);
  } catch (error) {
    console.log(error);
  }
};

const editComment = async (commentId, content) => {
  await dbRef.doc(commentId).update({
    content,
  });
};

export default {
  addComment,
  deleteComment,
  editComment,
};
