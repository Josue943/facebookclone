import React from 'react';
import { Avatar } from '@material-ui/core';

import '../css/AddComment.css';
import api from '../api/comment';
import { commentValidation } from '../utility/validation';
import firebase from 'firebase';
import useForm from '../hooks/useForm';

const Commentary = ({ postId, user }, ref) => {
  const handleSubmit = async () => {
    await api.addComment({
      content: values,
      user,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      postId,
    });
    resetValues();
  };

  const { onSubmit, resetValues, setValue, values } = useForm(
    '',
    handleSubmit,
    commentValidation
  );

  return (
    <div className='add-comment'>
      <div className='comment-avatar'>
        <Avatar src={user.photoURL} />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Write a comment...'
          value={values}
          onChange={e => setValue(e.target.value)}
          ref={ref}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

const AddComment = React.forwardRef(Commentary);
export default AddComment;
