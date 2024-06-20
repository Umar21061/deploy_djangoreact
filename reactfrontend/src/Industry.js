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

  // List of dark colors to be used for background
  const darkColors = ['#BFE92E', '#EDDA34', '#2FEF4C', '#2FEFB5', '#2FA0EF', '#B91ADC'];

  return (
    <div className="industry-container">
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="industry-row">
          {row.map((industry, index) => (
            <div key={`${rowIndex}-${index}`} className="industry-item" style={{ backgroundColor: darkColors[(rowIndex * 2 + index) % darkColors.length] }}>
              <div className="industry-content">
                <div className="industry-text">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
                <div className="industry-image">
                  <img src={industry.image} alt={industry.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Industry;
