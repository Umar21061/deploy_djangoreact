import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogPage.css';
import { Link, Routes, Route } from 'react-router-dom';
import BlogData from './BlogData';
import Premium from './Premium';
import Footer from './Footer';
import BlogSlider from './BlogSlider';

const BlogPage = () => {
    const [tags, setTags] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [selectedDocumentName, setSelectedDocumentName] = useState(null);

    useEffect(() => {
        // Fetch tags
        axios.get('/api/blog_page/')
            .then(response => {
                console.log('Tags response:', response.data);
                if (response.data.options) {
                    setTags(response.data.options);
                } else {
                    setError('No options found in the response.');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the tags!', error);
                setError('There was an error fetching the tags!');
            });

        // Fetch documents for "All Categories" when the component mounts
        axios.get('/api/blog_page/', { params: { tag: 'All Categories' } })
            .then(response => {
                console.log('Documents response:', response.data);
                if (response.data.documents) {
                    setDocuments(response.data.documents);
                } else {
                    setError('No documents found for the selected tag.');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the documents!', error);
                setError('There was an error fetching the documents!');
            });
    }, []);

    const handleTagClick = (tag) => {
        setError(null);
        axios.get('/api/blog_page/', { params: { tag } })
            .then(response => {
                console.log('Documents response:', response.data);
                if (response.data.documents) {
                    setDocuments(response.data.documents);
                } else {
                    setError('No documents found for the selected tag.');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the documents!', error);
                setError('There was an error fetching the documents!');
            });
    };

    const handleDocumentClick = (name) => {
        setSelectedDocumentName(name);
    };

    return (
        <>
        <BlogSlider />
            <div className="blog-container">
                <h1 className='blogs-heading'>Welcome To Our Blogs</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="blog-button-container">
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <button key={index} onClick={() => handleTagClick(tag)}>
                                {tag}
                            </button>
                        ))
                    ) : (
                        <p>Loading tags...</p>
                    )}
                </div>

                <div className="blog-documents-container">
                    {documents.length > 0 ? (
                        documents.map(doc => (
                            <div key={doc._id} className="blog-document-wrapper">
                                <Link to={`/blogdata/${doc.name}`} className="blog-document-link" onClick={() => handleDocumentClick(doc.name)}>
                                    <div className="blog-document">
                                        <p>{doc.description}</p>
                                        <img src={doc.image_url} alt={doc.name} />
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Select a tag to see documents.</p>
                    )}
                </div>

                {selectedDocumentName && (
                    <p>Selected Document Name: {selectedDocumentName}</p>
                )}

                {/* Define the routes for detailed document views */}
                <Routes>
                    <Route path="/blogdata/:name" element={<BlogData />} />
                </Routes>
            </div>
            <Premium />
            <Footer />
        </>
    );
};

export default BlogPage;
