import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Career.css';
import video from './video/v6.mp4';
import Footer from './Footer.js';

const Career = () => {
  const [filter, setFilter] = useState('All'); // State to track filter option

  // Define job data
  const jobs = [
    {
      title: 'Business Development Manager',
      location: 'Remote or Poznan HQ',
      salary: 'CoE: 12500 - 15700 PLN gross\nB2B: 15000 - 19000 PLN net + VAT',
      type: 'All', // Job type
    },
    {
      title: 'If you didn\'t find the right job for you, you can still apply with our general form',
      location: 'Remote or Poznan HQ',
      salary: '',
      type: 'Sale', // Job type
    }
    // Add more job objects here
  ];

  // Filter jobs based on selected filter
  const filteredJobs = jobs.filter(job => job.type === filter || filter === 'All');

  return (
    <>
      <div className="career-container">
        {/* Video */}
        <video autoPlay loop muted className="career-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Text Overlay */}
        <div className="career-text-overlay">
          <h1 className="career-heading">Join Our AI-Driven Team</h1>
          <h5 className="career-text">Explore the future with us and experience our dynamic company culture. Check out our career opportunities in artificial intelligence, software development, and more!</h5>
        </div>
        {/* Career Opportunities */}
        <div className="container" id="career-opportunities-container">
          <div className='heading display-5 fw-bold lh-1 mb-5 slice-left-to-right' style={{ marginBottom: '20px' }}>OUR CAREER OPPORTUNITIES</div>
          <div className="button-row-career">
            <button className={filter === 'All' ? 'button-career active' : 'button-career'} onClick={() => setFilter('All')}>All</button>
            <button className={filter === 'Sale' ? 'button-career active' : 'button-career'} onClick={() => setFilter('Sale')}>Sales</button>
          </div>
          {/* Job Rows */}
          {filteredJobs.map((job, index) => (
            <div className={job.type === 'Sale' ? 'job-row2' : 'job-row'} key={index}>
              <div className="job-info">
                <h6 className={job.type === 'Sale' ? 'job-title2' : 'job-title'}>{job.title}</h6>
                <h6 className="job-text1">{job.location}</h6>
              </div>
              {job.type === 'Sale' ? null : (
                <div className="job-info">
                  <h6 className="job-salary">{job.salary}</h6>
                </div>
              )}
              <div className="job-apply">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2PSCNYU3kjvL7b9YjfFpbYctQ2Blbyq0Aj1R2K3HLAy9nQw/viewform?usp=sf_link" 
                  className="button-apply" 
                  target="_blank"  
                  rel="noopener noreferrer"  
                  style={{ textDecoration: 'none' }}
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <Footer />
    </>
  );
};

export default Career;
