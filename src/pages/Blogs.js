// Blogs.js

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../components/Blogs.css';
import ComingSoon from "./ComingSoon"; // Ensure this path is correct

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3; // Display 3 press releases per page

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:8000/api/blogs/')
            .then(response => response.json())
            .then(data => {
                // Sort the blogs by date, newest first
                const sortedBlogs = data.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
                setBlogs(sortedBlogs);
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    // Get current press releases
    const indexOfBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfBlog);

    // Calculate page count
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    // Change page handler
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <ComingSoon/>
        // <div className="blogs-page">
        //     <h1>Blogs</h1>
        //     <div className="blog-grid">
        //         {currentBlogs.map((blog) => (
        //             <div key={blog.id} className="blog-card">
        //                 <img src={blog.image || 'default-image-path.jpg'} alt={blog.title}/>
        //                 <div className="blog-content">
        //                     <h2>{blog.title}</h2>
        //                     <h3>{blog.subTitle}</h3>
        //                     <p>Date Published: {blog.date_published}</p>
        //                     <Link to={`/blogs/${blog.id}`}>Read More</Link>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        //     {pageCount > 1 && (
        //         <div className="pagination">
        //             {Array.from({length: pageCount}, (_, i) => (
        //                 <button
        //                     key={i + 1}
        //                     onClick={() => handlePageChange(i + 1)}
        //                     className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
        //                 >
        //                     {i + 1}
        //                 </button>
        //             ))}
        //         </div>
        //     )}
        // </div>
    );
};

export default Blogs;
