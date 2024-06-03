

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PostItem } from '../components/PostItem';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      console.log('fetching articles...');
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/v1/articles', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('api response:', response.data);
        
        response.data.articles.forEach(post => {
          console.log(`Post ID: ${post.id}, Image: ${post.image}`);
        });
        
        setPosts(response.data.articles.map(post => ({
          ...post,
          image: post.image ? post.image.replace(/\\/g, '/') : null
        })));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='posts'>
      <h3 className='recent'>Recent Posts</h3>
      <div className="container posts-container">
        {posts.map(post => (
          <PostItem
            key={post.id}
            postId={post.id}
            thumbnail={ `${post.image}` } 
            category={post.categories?.[0]?.name || "Uncategorized"}
            title={post.title}
            description={post.content}
            author={post.author} 
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
