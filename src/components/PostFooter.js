import React, { useRef, useState, useEffect } from 'react';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import '../css/PostFooter.css';
import AddComment from './AddComment';
import db from '../firebase';
import Comment from './Comment';
import Like from './Like';
import { useAuthContext } from '../context/AuthContext';

const PostFooter = ({ likes = [], postId, totalComments }) => {
  const ref = useRef(null);
  const [comments, setComments] = useState([]);
  const [{ user }] = useAuthContext();

  useEffect(() => {
    const getComments = async () => {
      await db
        .collection('comments')
        .where('postId', '==', postId)
        .orderBy('createdAt', 'desc')
        .limit(3)
        .onSnapshot(snapshot => {
          setComments(
            snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          );
        });
    };
    getComments();
  }, []);

  const liked = likes.includes(user.uid) ? true : false;

  const counterLikes = () => {
    if (liked) {
      const likeCounter = likes.length - 1;
      if (likes.length === 1) return user.displayName;
      return `You and ${likeCounter} ${likeCounter > 1 ? 'others' : 'other'} `;
    }
    return likes.length;
  };

  const postOptions = [
    {
      title: 'Comment',
      Icon: ChatBubbleIcon,
      onClick: () => ref.current.focus(),
    },
    {
      title: 'Share',
      Icon: NearMeIcon,
    },
  ];

  const setVisibility = number => ({ visibility: number ? '' : 'hidden' });

  return (
    <>
      {likes.length > 0 || totalComments > 0 ? (
        <div className='post-counter'>
          <div
            className='post-likes-counter'
            style={setVisibility(likes.length)}
          >
            <div className='post-likes'>
              <ThumbUpIcon />
            </div>
            <h4>{counterLikes()}</h4>
          </div>
          <p style={setVisibility(totalComments)}>
            {totalComments} {totalComments > 1 ? 'Comments' : 'Comment'}
          </p>
        </div>
      ) : null}

      <div className='post-options'>
        <Like liked={liked} userId={user.uid} postId={postId} />
        {postOptions.map(({ Icon, title, onClick }, i) => (
          <div className='post-option' onClick={onClick} key={i}>
            <Icon />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <AddComment postId={postId} ref={ref} user={user} />
      <div className='post-comments'>
        {comments
          .map(commentary => (
            <Comment
              commentary={commentary}
              key={commentary.id}
              userId={user.uid}
            />
          ))
          .slice(0, 2)}
      </div>
    </>
  );
};

export default PostFooter;
