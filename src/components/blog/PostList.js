import React from 'react';
import { Link } from 'react-router-dom';
import posts from './posts.json';
import './PostList.css';

const PostList = () => {
  return (
    <div className="post-list">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
