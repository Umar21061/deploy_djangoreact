// Reward.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reward.css'; // Import the CSS file

const Reward = () => {
    const [rewards, setRewards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const response = await axios.get('/api/get_reward_data'); // Make sure the URL matches your Django URL
                setRewards(response.data);
            } catch (error) {
                console.error('Error fetching reward data:', error);
                setError('Failed to fetch reward data');
            }
        };

        fetchRewards();
    }, []);

    return (
        <div>
            <h3 className='reward-heading'>Our Reward</h3> {/* "Our Reward" row added here */}
            <div className="reward-container">
                {error && <p>{error}</p>}
                {rewards.map((reward, index) => (
                    <div className="reward-item" key={index}>
                        <img src={reward.image_url} alt={reward.image_heading} className="reward-image" />
                        <div className="reward-overlay">
                            <h2>{reward.image_heading}</h2>
                            <p>{reward.image_description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reward;
