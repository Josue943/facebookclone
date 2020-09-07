import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import api from '../api/like';

const Like = ({ liked, userId, postId }) => {
  const action = liked ? api.dislikePost : api.likePost;
  return (
    <div
      className={`post-option ${liked ? 'liked' : ''}`}
      onClick={() => action(postId, userId)}
    >
      <ThumbUpIcon />
      <p>Like</p>
    </div>
  );
};

export default Like;
