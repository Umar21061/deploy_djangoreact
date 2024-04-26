// Recent.js
import React, { useState, useEffect, useRef } from 'react';
import './RecentCase.css'; // Import the CSS file specific to the Recent component

function Recent() {
    const [portfolioData, setPortfolioData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showExpertise, setShowExpertise] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        fetchPortfolioData();
    }, []);

    useEffect(() => {
        videoRefs.current = Array(portfolioData.length).fill().map((_, i) => videoRefs.current[i] || React.createRef());
    }, [portfolioData]);

    const fetchPortfolioData = async () => {
        try {
            const response = await fetch('/api/get_portfolio_data/');
            const data = await response.json();
            setPortfolioData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
            setLoading(false);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const toggleExpertise = () => {
        setShowExpertise(true);
        setSelectedCategory(null);
    };

    const toggleIndustry = () => {
        setShowExpertise(false);
        setSelectedCategory(null);
    };

    const showAllVideos = () => {
        setSelectedCategory(null);
    };

    const handleMouseEnter = (index) => {
        setActiveVideoIndex(index);
        videoRefs.current[index].current.play();
    };

    const handleMouseLeave = (index) => {
        setActiveVideoIndex(null);
        videoRefs.current[index].current.pause();
    };

    return (
        <div className="recent">
            <div className="recent-button-container">
                <button className="recent-industry-button" onClick={toggleIndustry}>Industry</button>
                <button className="recent-expertise-button" onClick={toggleExpertise}>Expertise</button>
                <button className="recent-all-category-button" onClick={showAllVideos}>All Categories</button>
            </div>

            <div className="recent-category-buttons">
                {showExpertise ? (
                    <div className="center">
                        {['Backend Development', 'Discovery & Design', 'Frontend Development', 'Interactive Experience', 'Mobile Development', 'Web Development'].map((category, index) => (
                            <button key={index} onClick={() => handleCategorySelect(category)} className={selectedCategory === category ? "recent-selected" : ""}>
                                {category}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="center">
                        {['Retail', 'Data Management', 'Entertainment', 'Finance', 'Health', 'Manufacturing', 'Transportation'].map((category, index) => (
                            <button key={index} onClick={() => handleCategorySelect(category)} className={selectedCategory === category ? "recent-selected" : ""}>
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {loading ? (
                <p className="recent-loading-text">Loading...</p>
            ) : (
                <div className="recent-video-container">
                    {portfolioData.map((project, index) => (
                        <div key={index} className="recent-video-item">
                            {(!selectedCategory || selectedCategory === 'All Categories' || (project.category && project.category.includes(selectedCategory))) && (
                                <div className="recent-video-player">
                                    {project.urls.slice(0, 3).map((url, videoIndex) => (
                                        <div
                                            key={videoIndex}
                                            className="recent-video-player"
                                            onMouseEnter={() => handleMouseEnter(index * 3 + videoIndex)}
                                            onMouseLeave={() => handleMouseLeave(index * 3 + videoIndex)}
                                        >
                                            <video
                                                ref={videoRefs.current[index * 3 + videoIndex]}
                                                controls={false}
                                                autoPlay={activeVideoIndex === index * 3 + videoIndex}
                                                muted
                                                onClick={() => videoRefs.current[index * 3 + videoIndex].current.paused ? videoRefs.current[index * 3 + videoIndex].current.play() : videoRefs.current[index * 3 + videoIndex].current.pause()}
                                            >
                                                <source src={url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            {activeVideoIndex === index * 3 + videoIndex && <p className="recent-video-text">{project.video_text}</p>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Recent;
