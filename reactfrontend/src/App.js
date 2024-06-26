import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import RecentCase from './RecentCase';


import Footer from './Footer';

import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import Partner from './Partner';



import Value from './Value';
import Service2 from './Service2';
import Career from './Career';
import Apply from './Apply';
import ContactForm from './Contact';
import BlogPage from './BlogPage';

import Bot from './Bot';

import LearnMore from './LearnMore';

import Project from './project';
import ProjectDetails from './ProjectDetails';
import BlogData from './BlogData';
import AboutBanner from './AboutBanner';
import BlogSlider from './BlogSlider';
import Testimonial from './Testimonial';
import Industry from './Industry';
import Industry_details from './Industry_details';
import IndustryPage from './IndustryPage';


function App() {
  const [textData, setTextData] = useState('');

  useEffect(() => {
    fetchTextData();
  }, []);

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  const fetchTextData = async () => {
    try {
      const response = await fetch('/api/get_text_data/');
      const data = await response.json();
      setTextData(data.text);
    } catch (error) {
      console.error('Error fetching text data:', error);
    }
  };

  const LearnMorePage = ({ category }) => {
    return (
      <div>
        <LearnMore uniqueClassName="learnmore-page" category={category} />
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
       
        <Navbar />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        
          
          <Route path="/" element={<HomePage textData={textData} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<ContactForm />} />
         
          <Route path="/blogdata/:name" element={<BlogData />} />

          <Route path="/blogpage" element={<BlogPage />} />
          
          <Route path="/generative-ai" element={<LearnMorePage category="Generative AI" />} />
          <Route path="/machinelearning" element={<LearnMorePage category="Machine Learning" />} />
          <Route path="/languageprocessing" element={<LearnMorePage category="Language Processing" />} />
          <Route path="/dataanalytics" element={<LearnMorePage category="Data Analytics" />} />
          <Route path="/aisecurity" element={<LearnMorePage category="AI-Driven Security" />} />
          <Route path="/predictiveanalysis" element={<LearnMorePage category="Predictive Analytics" />} />
          <Route path="/reboticautomation" element={<LearnMorePage category="Robotic Process Automation" />} />
          <Route path="/computervision" element={<LearnMorePage category="Computer Vision" />} />
          <Route path="/productdesign" element={<LearnMorePage category="Product Design" />} />
          <Route path="/webdevelopment" element={<LearnMorePage category="Web App Development" />} />
          <Route path="/mobiledevelopment" element={<LearnMorePage category="Mobile Development" />} />
          <Route path="/projectdetails/:category/:name" element={<ProjectDetails />} />
          <Route path="/project" element={<Project />} />
          <Route path="/industrydetailpage/:industryName" element={<Industry_details />} /> 
          <Route path="/industry" element={<IndustryPage />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}



function HomePage({ textData }) {
  return (
    <>
     <Bot/>
      <Services/>
      <Industry/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
      
      
    </>
  );
}

export default App;
