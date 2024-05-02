import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css'; // Import the CSS file

const LearnMore2 = ({ uniqueClassName }) => {
  const [learnMoreData, setLearnMoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/generative_ai/');
        setLearnMoreData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { 'learnmore-div1': div1, 'learnmore-div2': div2, div3 } = learnMoreData;

  return (
    <div className={`container ${uniqueClassName}`}>
      <div className="learnmore-div1">
        <div className="left-column">
          <h2>{div1['left-column']['heading1']}Crafting Tomorrow's Innovations, Today</h2>
          <p style={{ color: 'black' }}>Encapsulates the dynamic world of Generative AI, where algorithms are at the forefront of creativity and innovation. This groundbreaking technology transforms raw data into stunning visual art, captivating music compositions, and compelling narratives, all with unprecedented efficiency and originality.</p>
        </div>
        <div className="right-column">
          <img src={div1['right-column']['image_url']} alt="Velocity+" />
        </div>
      </div>
      <div className="learnmore-div2">
        <h3 className="heading2">{div2['heading2']}</h3>
        <p className="heading2-text">{div2['heading2-text']}</p>
        <h2>What You Get</h2>
        <ul>
          {div2['rows'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="image-row">
          {div3.map((item, index) => (
            <div key={index} className="learnmore-image">
              <img src={item['image_url']} alt={item['title']} />
              <h4 className="image-title">{item['title']}</h4>
              <p className="image-text">{item['text']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore2;
