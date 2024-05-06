import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogPage2.css'; // Import CSS file

const BlogPage2 = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blogpage2/');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    // Fetch blog data only when the component mounts
    fetchBlogData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>

      <div className="blockpage2 container">
        {/* Side-by-side divs */}
        {blogData.length > 0 && (
          <div className="blockpage2 side-container">
            {/* Left side containing the image */}
            <div className="blockpage2 left-side">
              <img src={blogData[0].image_url} alt="Blog" />
            </div>
            {/* Right side containing text and button */}
            <div className="blockpage2 right-side">
              <p>{blogData[0].description}</p>
              <button>{blogData[0].btn}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage2;
