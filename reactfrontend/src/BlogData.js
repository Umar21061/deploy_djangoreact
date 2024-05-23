import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogData.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';
import loadingImage from './image/loading3.gif'; 

const BlogData = () => {
    const { name } = useParams(); // Get the name parameter from the URL
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Scroll to the top of the page when component mounts
        window.scrollTo(0, 0);

        axios.get('/api/blog_data/', { params: { name } }) 
            .then(response => {
                setDocuments(response.data.documents);
            })
            .catch(error => {
                console.error('There was an error fetching the documents!', error);
                setError('There was an error fetching the documents!');
            });
    }, [name]);

    return (
        <div className="blogdata-container-fluid">
            {error && <p className="error">{error}</p>}
            {documents.length > 0 ? (
                documents.map(doc => (
                    <div key={doc._id} className="blogdata-document">
                        <img src={doc.title_image} alt={doc.title_heading} className="blogdata-img" />
                        <div className="blogdata-header">
                            <div className="blogdata-title-container"> {/* New container */}
                                <h2 className="blogdata-title">{doc.title_heading}</h2>
                                <div className="blogdata-date-time"> {/* New container */}
                                    <p className="blogdata-date">{doc.title_date}</p>
                                    <p className="blogdata-time">{doc.title_time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="blogdata-section">
                            <h3 className="blogdata-about-heading">{doc.about_heading}</h3>
                            <p className="blogdata-about-text">{doc.about_text}</p>
                        </div>
                        <div className="blogdata-section">
                            <h3 className="blogdata-blog-heading">{doc.blog_heading}</h3>
                            <p className="blogdata-blog-text">{doc.blog_text}</p>
                            <img src={doc.blog_image} alt={doc.blog_heading} className="blogdata-img" />
                        </div>
                        <div className="blogdata-section">
                            <h3 className="blogdata-blog-heading">{doc.blog_heading2}</h3>
                            <p className="blogdata-blog-text">{doc.blog_text2}</p>
                            <img src={doc.blog_image2} alt={doc.blog_heading2} className="blogdata-img" />
                        </div>
                    </div>
                ))
            ) : (
                <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={loadingImage} alt="Loading..." style={{ maxWidth: '20%', maxHeight: '30%', margin: 'auto' }} />
</div>

            )}
        </div>
    );
};

export default BlogData;
