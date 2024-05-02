import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore11 = ({ uniqueClassName }) => {
  const [learnMoreData, setLearnMoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get_mobile_development_data/');
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
    return <div className="learnmore-div1">Loading...</div>;
  }

  if (error) {
    return <div className="learnmore-div1">Error: {error}</div>;
  }

  const { 'learnmore-div1': div1, 'learnmore-div2': div2, div3 } = learnMoreData;

  return (
    <div className={`container ${uniqueClassName}`}>
      <div className="learnmore-div1">
        <div className="left-column">
          <h2>{div1['left-column']['heading1']}</h2>
          <p style={{ color: 'black' }}>{div1['left-column']['text']}In the rapidly evolving digital age, mobile applications have emerged as essential tools for businesses worldwide. Our mobile app development services offer tailored solutions crafted to elevate your brand's presence and performance in the palm of your users' hands. From concept to deployment, our experienced team works tirelessly to understand your unique requirements and bring your vision to life. Using cutting-edge technologies and best practices, we create intuitive, feature-rich apps that deliver seamless user experiences across iOS, Android, and cross-platform environments. Our commitment doesn't end at launch; we provide ongoing support and maintenance to ensure your app remains secure, scalable, and up-to-date. By partnering with us, you gain a strategic ally dedicated to driving innovation and achieving your business goals through mobile technology.</p>
        </div>
        <div className="right-column">
          <img src={div1['right-column']['image_url']} alt={div1['right-column']['alt']} />
        </div>
      </div>
      <div className="learnmore-div2">
        <h3 className="heading2">{div2['heading2']}</h3>
        <p className="heading2-text">{div2['heading2-text']}</p>
        <h2 className="heading2-heading">{div2['heading2-heading']}</h2>
        <ul>
          {div2['rows'].map((item, index) => (
            <li key={index} className="numbered-row">
              {item}
            </li>
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

export default LearnMore11;
