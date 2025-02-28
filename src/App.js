import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './components/PostCard';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="app">
      <h1>Postagens Publicadas</h1>
      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
};

export default App;
