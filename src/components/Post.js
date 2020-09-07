import React from 'react';
import { Avatar } from '@material-ui/core';

import '../css/Post.css';
import PostFooter from './PostFooter';

const Post = ({
  post: {
    id,
    imageUrl,
    timestamp,
    message,
    user: { photoURL, displayName },
    likes,
    totalComments,
  },
}) => {
  return (
    <div className='post'>
      <div className='post-top'>
        <Avatar src={photoURL} className='post-avatar' />
        <div className='post-top-info'>
          <h3>{displayName}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>
      <div className='post-bottom'>
        <p>{message}</p>
      </div>
      <div className='post-image'>
        <img src={imageUrl} alt='' />
      </div>
      <PostFooter postId={id} likes={likes} totalComments={totalComments} />
    </div>
  );
};

export default Post;
