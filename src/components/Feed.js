import React, { useState, useEffect } from 'react';

import '../css/Feed.css';
import db from '../firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import LoadingScreen from '../pages/LoadingScreen';
import StoryReel from './StoryReel';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await db
        .collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          if (loading) setLoading(false);
        });
    };
    getData();
  }, []);
  console.log(posts);
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <div className='posts-container'>
        {loading ? (
          <LoadingScreen />
        ) : (
          posts.map(post => <Post post={post} key={post.id} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
