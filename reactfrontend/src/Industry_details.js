import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Industry_details.css';

const IndustryDetails = () => {
  const [industryData, setIndustryData] = useState([]);
  const { industryName } = useParams(); // Get the industry name from the URL

  useEffect(() => {
    const fetchIndustryData = async () => {
      try {
        const response = await axios.get('/api/industry-details/');
        // Filter data based on the industry name from the URL
        const filteredData = response.data.filter(item => item.name === industryName);
        setIndustryData(filteredData);
      } catch (error) {
        console.error('Error fetching industry data:', error);
      }
    };

    fetchIndustryData();
  }, [industryName]); // Fetch data whenever the industryName changes

  return (
    <div className="industry_details-container">
      {industryData.map((industry, index) => (
        <div key={index} className="industry_details-item">
          <div className="heading_details">
            <div className="left">
              <h3>{industry.heading1}</h3>
              <p>{industry.text1}</p>
              <p>{industry.button}</p>
            </div>
            <div className="right">
              {industry.image1 && <img src={industry.image1} alt="Image 1" />}
            </div>
          </div>
          <h3 className='second-heading'>{industry.heading2}</h3>
          <div className="additional_details-row">
            {/* First row of additional details */}
            {industry.logo1 && (
              <div className="additional_details">
                <h4>{industry.title1}</h4>
                <img src={industry.logo1} alt="Logo 1" />
                <p>{industry.title_description1}</p>
              </div>
            )}
            {industry.logo2 && (
              <div className="additional_details">
                <h4>{industry.title2}</h4>
                <img src={industry.logo2} alt="Logo 2" />
                <p>{industry.title_description2}</p>
              </div>
            )}
            {industry.logo3 && (
              <div className="additional_details">
                <h4>{industry.title3}</h4>
                <img src={industry.logo3} alt="Logo 3" />
                <p>{industry.title_description3}</p>
              </div>
            )}
          </div>
          <div className="additional_details-row">
            {/* Second row of additional details */}
            {industry.logo4 && (
              <div className="additional_details">
                <h4>{industry.title4}</h4>
                <img src={industry.logo4} alt="Logo 4" />
                <p>{industry.title_description4}</p>
              </div>
            )}
            {industry.logo5 && (
              <div className="additional_details">
                <h4>{industry.title5}</h4>
                <img src={industry.logo5} alt="Logo 5" />
                <p>{industry.title_description5}</p>
              </div>
            )}
            {industry.logo6 && (
              <div className="additional_details">
                <h4>{industry.title6}</h4>
                <img src={industry.logo6} alt="Logo 6" />
                <p>{industry.title_description6}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryDetails;
