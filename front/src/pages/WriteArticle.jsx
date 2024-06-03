import React, { useState } from 'react';
import axios from 'axios';

const WriteArticle = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')

  // const handleTitleChange = (e) => setTitle(e.target.value);
  // const handleImageChange = (e) => setImage(e.target.files[0]);
  // const handleContentChange = (e) => setContent(e.target.value);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setLoading(true)
    // setError(null)

    if(!title || !content){
      setMessage('Title and content are required')
      return
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if(image) formData.append('file', image);

    try{
      const token = localStorage.getItem('token')
      const response = await axios.post('api/v1/articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
        
      })
      setMessage('Article created successfully')
      }catch(error){
        console.error('Error creating article:', error)
        setMessage('Failed to create article', error.message)
      }

      
    }
    
      return (
            <div className="write-article">
              {message && <p className="message">{message}</p>}
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="form-group">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input type="file" id="image" name="image" accept='image/*' onChange={handleImageChange} />
                </div>
                <div className="form-group">
                  <textarea
                    className="text-area"
                    id="content"
                    name="content"
                    cols={30}
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="publish">Publish</button>
                {/* <button type="button" className="draft">Save draft</button> */}
              </form>
            </div>
          );
        };

        export default WriteArticle;


  