import React, { useState, useEffect } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('/api/get_blogs_data/')
            .then(response => response.json())
            .then(data => setBlogsData(data))
            .catch(error => console.error('Error fetching blogs data:', error));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleAllCategoriesClick = () => {
        setSelectedCategory(null); // Reset selected category
    };

    return (
        <div className="blogs">
            <h1 className='blogs-heading'>Our Blogs </h1>
            <button onClick={handleAllCategoriesClick}>All Categories</button>
            {blogsData && Object.entries(blogsData).map(([category, details]) => (
                selectedCategory !== category && (
                    <button key={category} onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
                )
            ))}
            {selectedCategory && (
                <div className="blog-details">
                    {blogsData[selectedCategory].image_url.map((url, index) => (
                        <div key={index} className="image-container">
                            <img src={url} alt={`${selectedCategory} Image ${index + 1}`} />
                            <div className="image-text">{blogsData[selectedCategory].image_text}</div>
                        </div>
                    ))}
                </div>
            )}
            {!selectedCategory && blogsData && (
                <div className="blog-details">
                    {Object.entries(blogsData).map(([category, details]) => (
                        <React.Fragment key={category}>
                            {details.image_url.map((url, index) => (
                                <div key={index} className="image-container">
                                    <img src={url} alt={`${category} Image ${index + 1}`} />
                                    <div className="image-text">{details.image_text}</div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blogs;
