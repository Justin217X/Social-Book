import React from 'react';
import './Feed.css';
import Post from './Post';
import PostPrompt from './PostPrompt';

const Feed = () => {
  return (
    <div className='feed'>
        <PostPrompt />
        <Post />
    </div>
  )
}

export default Feed;