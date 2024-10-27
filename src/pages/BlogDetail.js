// BlogDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../components/BlogDetail.css'; // Make sure to create and import this CSS file

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/blogs/${id}/`)
      .then(response => response.json())
      .then(data => {
        setBlog(data);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <div className="content">
        <h1>{blog.title}</h1>
        <div className="image-container">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="text-content">
          <p>{blog.content}</p>
          <p>Date Published: {new Date(blog.date).toLocaleDateString()}</p>
          {blog.url && <a href={blog.url} target="_blank" rel="noopener noreferrer">Read Original</a>}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
