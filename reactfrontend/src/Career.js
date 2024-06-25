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
          <h1 className="career-heading">Can you feel IT?</h1>
          <h5 className="career-text">Hi there - Why don’t you explore what your future is going to be, check out our company vibe!</h5>
        </div>
        {/* Career Opportunities */}
        <div className="container" id="career-opportunities-container">
          <h6 className="career-heading2">OUR CAREER OPPORTUNITIES</h6>
          <div className="button-row-career ">
            <button className={filter === 'All' ? 'button-career active' : 'button-career'} onClick={() => setFilter('All')}>All</button>
            <button className={filter === 'Sale' ? 'button-career active' : 'button-career'} onClick={() => setFilter('Sale')}>Sale</button>
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
    href="https://forms.gle/HhVLPQNTTY1hNScj7" 
    className="button-apply" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'none', color: 'inherit' }}
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
