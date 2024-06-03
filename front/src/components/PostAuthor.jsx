import React from 'react';
import { Link } from 'react-router-dom';

export const PostAuthor = ({ author }) => {
  return (
    <Link to={`/posts/users/${author.id}`} className='post-author'>
      <div className="post-author-avatar">
        <img src={author.profilePicture || "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"} alt={author.name} />
      </div>
      <div className="post-author-details">
        <h5>{author.name}</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};
