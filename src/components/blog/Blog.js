import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

const Blog = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path=":postId" element={<Post />} />
      </Routes>
    </div>
  );
};

export default Blog;
