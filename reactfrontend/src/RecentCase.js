import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecentCase.css';
import PortfolioProject from './PortfolioProject';

function Recent() {
    const [portfolioData, setPortfolioData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        fetchPortfolioData();
    }, []);

    useEffect(() => {
        videoRefs.current = Array(portfolioData.length).fill().map((_, i) => videoRefs.current[i] || Array(portfolioData[i].urls.length).fill().map(() => React.createRef()));
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

    const handleMouseEnter = (index) => {
        setActiveVideoIndex(index);
        videoRefs.current[index[0]][index[1]].current.play();
    };

    const handleMouseLeave = (index) => {
        setActiveVideoIndex(null);
        videoRefs.current[index[0]][index[1]].current.pause();
    };

    const handleVideoClick = (projectId) => {
        // Handle navigation to ProjectDetails component here
        // For example, using react-router-dom's Link component
        // You'll need to adjust this according to your routing setup
        // Assuming you have a route for ProjectDetails with a dynamic parameter projectId
        // Replace '/project-details' with the actual path to your ProjectDetails component
        // and pass the projectId as a parameter
        // <Link to={`/project-details/${projectId}`}></Link>
    };

    return (
        <div>
            <h1 className="recent-heading">Our Projects</h1>
            <div className="recent">
                {loading ? (
                    <p className="recent-loading-text">Loading...</p>
                ) : (
                    <div className="recent-video-container">
                        <div className="recent-video-row">
                            {portfolioData.length > 0 && portfolioData[0].urls.map((url, videoIndex) => (
                                <div
                                    key={videoIndex}
                                    className="recent-video-player-horizontal"
                                    onMouseEnter={() => handleMouseEnter([0, videoIndex])}
                                    onMouseLeave={() => handleMouseLeave([0, videoIndex])}
                                >
                                    <Link 
                                        to={`/project-details/${portfolioData[0].id}`} 
                                        onClick={() => handleVideoClick(portfolioData[0].id)}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <video
                                            ref={videoRefs.current[0][videoIndex]}
                                            className="recent-video-player"
                                            controls={false}
                                            autoPlay={activeVideoIndex && activeVideoIndex[0] === 0 && activeVideoIndex[1] === videoIndex}
                                            muted
                                            onClick={() => {
                                                const videoRef = videoRefs.current[0][videoIndex].current;
                                                if (videoRef.paused) videoRef.play();
                                                else videoRef.pause();
                                            }}
                                        >
                                            <source src={url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <p className={`recent-video-text ${activeVideoIndex && activeVideoIndex[0] === 0 && activeVideoIndex[1] === videoIndex ? 'active' : ''}`}>{portfolioData[0].video_text}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {/* "See All Projects" button */}
                        <div className="show-all-projects">
                        <Link to="/portfolioproject">
                            <button>See All Projects</button>
                        </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Recent;
