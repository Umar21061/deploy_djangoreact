import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore = ({ uniqueClassName }) => {
    const [learnMoreData, setLearnMoreData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/learnmore/');
                setLearnMoreData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!learnMoreData) {
        return <div>Loading...</div>;
    }

    const { 'learnmore-div1': div1, 'learnmore-div2': div2, div3 } = learnMoreData;

    return (
        <div className={`container ${uniqueClassName}`}>
            <div className="learnmore-div1">
                <div className="left-column">
                <h1>Cutting-edge Machine Learning Solutions for Every Industry.</h1>
                <p className='learnmore-text'>Explore our innovative machine learning solutions, shaping tomorrow's landscape with transformative power. Our advanced algorithms decode data complexities, unlocking insights and propelling industries forward. Harnessing the potential of ML, we revolutionize operations, enhance decision-making, and personalize experiences. Join us on the forefront of technological evolution, driving efficiency, foresight, and seamless automation across diverse sectors. Welcome to the future of machine learning.</p>
                </div>
                <div className="right-column">
                    <img src={div1?.['right-column']?.image_url} alt="Right Column Image" />
                </div>
            </div>

            <div className="learnmore-div2">
                <h2>{div2?.heading2}</h2>
                <p className="heading2-text">{div2?.['heading2-text']}</p>
                <h3 className="heading2-heading">{div2?.['heading2-heading']}</h3>
                {div2?.rows && div2.rows.map((item, index) => (
                    <div className="numbered-row" key={index}>
                        <p>{`${index + 1}. ${item}`}</p>
                    </div>
                ))}
            </div>

            <div className="image-row">
                {div3 && div3.map((item, index) => (
                    <div className="image-container learnmore-image" key={index}>
                        <img src={item.image_url} alt={item.title} />
                        <div className="image-text">{item.text}</div>
                        <div className="image-title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnMore;
