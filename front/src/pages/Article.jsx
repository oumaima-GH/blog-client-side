import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    return (
        <div className="article-link">
          <Link to={`/posts/${article.id}`}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        </div>
      );
};

export default Article;
