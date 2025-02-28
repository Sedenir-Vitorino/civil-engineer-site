import React from 'react';

const PostCard = ({ post }) => (
  <div className="post-card">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

export default PostCard;
