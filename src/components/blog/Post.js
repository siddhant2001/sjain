// Post.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Post.css';

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`./posts/${postId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text))
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        setContent('Post not found.');
        console.error(err);
      });
  }, [postId]);

  return (
    <div className="post-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Post;
