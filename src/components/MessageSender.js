import React from 'react';
import { Avatar } from '@material-ui/core';
import firebase from 'firebase';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';

import '../css/MessageSender.css';
import api from '../api/post';
import MessageOption from '../components/MessageOption';
import { postValidation } from '../utility/validation';
import { useAuthContext } from '../context/AuthContext';
import useForm from '../hooks/useForm';

const MessageSender = () => {
  const [{ user }] = useAuthContext();
  const initialState = { message: '', imageUrl: '' };

  const handleSubmit = async () => {
    await api.createPost({
      ...values,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likes: [],
      user,
    });
    resetValues();
  };

  const { values, onChange, onSubmit, resetValues } = useForm(
    initialState,
    handleSubmit,
    postValidation
  );

  const { message, imageUrl } = values;

  const messageSenderOptions = [
    {
      icon: VideocamIcon,
      message: 'Live Video',
      color: 'red',
    },
    {
      icon: PhotoLibraryIcon,
      message: 'Photo Video',
      color: 'green',
    },
    {
      icon: InsertEmoticonIcon,
      message: 'Feeling/Activity',
      color: 'orange',
    },
  ];

  return (
    <div className='message-sender'>
      <div className='message-sender-top'>
        <Avatar src={user.photoURL} />
        <form onSubmit={onSubmit}>
          <input
            className='input'
            type='text'
            placeholder={`What's on your mind ${user.displayName} ?`}
            name='message'
            onChange={onChange}
            value={message}
          />
          <input
            name='imageUrl'
            placeholder='image URL (optional)'
            onChange={onChange}
            value={imageUrl}
          />
          <button type='submit'>hidden</button>
        </form>
      </div>
      <div className='message-sender-bottom'>
        {messageSenderOptions.map((o, i) => (
          <MessageOption
            Icon={o.icon}
            key={i}
            color={o.color}
            message={o.message}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageSender;
