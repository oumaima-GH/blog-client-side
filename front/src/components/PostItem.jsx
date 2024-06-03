// import React from 'react';
// import { PostAuthor } from './PostAuthor';
// import { Link } from 'react-router-dom';

// export const PostItem = ({ postId, category, title, description, authorId, thumbnail }) => {
//     return (
//         <article className="post">
//             <div className="post-thumbnail">
//                 <img src={thumbnail} alt={title} />
//             </div>
//             <div className="post-content">
//                 <Link to={`/posts/${postId}`}>
//                     <h3>{title}</h3>
//                 </Link>
//                 <p>{description}</p>
//                 <div className="post-footer">
//                     <PostAuthor authorId={authorId} />
//                     <Link to={`/posts/categories/${category}`} className='categ'>{category}</Link>
//                 </div>
//             </div>
//         </article>
//     );
// };

import React from 'react';
import { PostAuthor } from './PostAuthor';
import { Link } from 'react-router-dom';

export const PostItem = ({ postId, category, title, description, author, thumbnail }) => {
  return (
    <article className="post">
      <div className="post-thumbnail">
        <img src={`http://localhost:3000/uploads/${thumbnail}`} alt={title} />
        {console.log(`thumbnail:====== ${postId}===============>`, `http://localhost:3000/uploads/${thumbnail}`)}
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="post-footer">
          <PostAuthor author={author} />
          <Link to={`/posts/categories/${category}`} className='categ'>{category}</Link>
        </div>
      </div>
    </article>
  );
};

