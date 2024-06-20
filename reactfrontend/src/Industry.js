import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Industry.css'; // Import your CSS file for styling

const Industry = () => {
  const [industryData, setIndustryData] = useState([]);

  useEffect(() => {
    const fetchIndustryData = async () => {
      try {
        const response = await axios.get('/api/industry-data/');
        console.log('API response:', response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setIndustryData(response.data);
        } else {
          console.error('Expected array but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching industry data:', error);
      }
    };

    fetchIndustryData();
  }, []);

  // Function to chunk the industryData into arrays of 2 items each
  const chunkArray = (arr, chunkSize) => {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedData = chunkArray(industryData, 2);

  return (
    <div className="industry-container">
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="industry-row">
          {row.map((industry, index) => (
            <div key={index} className={`industry-item ${index === 0 ? 'left-radius' : 'right-radius'} ${index % 2 === 0 ? 'even' : 'odd'}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="industry-text">
                    <h3>{industry.name}</h3>
                    <p>{industry.description}</p>
                  </div>
                  <div className="industry-image">
                    <img src={industry.image} alt={industry.name} />
                  </div>
                </>
              ) : (
                <>
                  <div className="industry-image">
                    <img src={industry.image} alt={industry.name} />
                  </div>
                  <div className="industry-text">
                    <h3>{industry.name}</h3>
                    <p>{industry.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Industry;
