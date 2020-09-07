import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import Moment from 'react-moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import '../css/Comment.css';
import api from '../api/comment';
import CommentOptions from './CommentOptions';
import { commentValidation } from '../utility/validation';
import Input from './Input';
import Modal from './Modal';
import useForm from '../hooks/useForm';

const Comment = ({ commentary, userId }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onDelete = async () => {
    setOpen(false);
    setOpenModal(true);
  };

  const handleSubmit = async () => {
    await api.editComment(commentary.id, values);
    setEdit(false);
  };

  const { setValue, onSubmit, values } = useForm(
    commentary.content,
    handleSubmit,
    commentValidation
  );

  const editMode = (
    <form onSubmit={onSubmit}>
      <Input
        autoFocus={true}
        value={values}
        onChange={e => setValue(e.target.value)}
        setEdit={() => setEdit(false)}
      />
      <button>Hidden</button>
    </form>
  );

  return (
    <div className='comment'>
      <div className='comment-avatar'>
        <Avatar src={commentary.user.photoURL} />
      </div>
      <div className='comment-info'>
        <h4>{commentary.user.displayName}</h4>
        {!edit ? <p>{commentary.content}</p> : editMode}
        <p className='comment-date'>
          {commentary.createdAt ? (
            <Moment fromNow ago>
              {new Date(commentary.createdAt.toDate())}
            </Moment>
          ) : (
            'a few seconds'
          )}{' '}
          ago
        </p>
      </div>
      {userId === commentary.user.uid && (
        <div className='comment-options'>
          <MoreHorizIcon onClick={() => setOpen(!open)} />
          {open && (
            <CommentOptions
              setOpen={() => setOpen(false)}
              onDelete={onDelete}
              onEdit={() => {
                setOpen(false);
                setEdit(true);
                setValue(commentary.content);
              }}
            />
          )}
        </div>
      )}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onClick={() => api.deleteComment(commentary)}
      />
    </div>
  );
};

export default Comment;
