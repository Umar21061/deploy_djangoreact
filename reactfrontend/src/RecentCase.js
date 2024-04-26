// RecentCase.js
import React, { useState, useEffect, useRef } from 'react';
import './RecentCase.css';

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

    return (<div>
        <h1> Our Projects</h1>
        <div className="recent">
            {loading ? (
                <p className="recent-loading-text">Loading...</p>
            ) : (
                <div className="recent-video-container">
                    <div className="recent-video-row">
                        {portfolioData.map((project, categoryIndex) => (
                            <React.Fragment key={categoryIndex}>
                                {project.urls.map((url, videoIndex) => (
                                    <div
                                        key={`${categoryIndex}-${videoIndex}`}
                                        className="recent-video-player-horizontal"
                                        onMouseEnter={() => handleMouseEnter([categoryIndex, videoIndex])}
                                        onMouseLeave={() => handleMouseLeave([categoryIndex, videoIndex])}
                                    >
                                        <video
                                            ref={videoRefs.current[categoryIndex][videoIndex]}
                                            className="recent-video-player"
                                            controls={false}
                                            autoPlay={activeVideoIndex && activeVideoIndex[0] === categoryIndex && activeVideoIndex[1] === videoIndex}
                                            muted
                                            onClick={() => {
                                                const videoRef = videoRefs.current[categoryIndex][videoIndex].current;
                                                if (videoRef.paused) videoRef.play();
                                                else videoRef.pause();
                                            }}
                                        >
                                            <source src={url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <p className={`recent-video-text ${activeVideoIndex && activeVideoIndex[0] === categoryIndex && activeVideoIndex[1] === videoIndex ? 'active' : ''}`}>{project.video_text}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </div>

    );
}

export default Recent;
