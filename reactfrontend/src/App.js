import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import RecentCase from './RecentCase';
import BlogPage2 from './BlogPage2';
import Cons from './Cons';
import Footer from './Footer';
import BlogPage from './BlogPage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import Partner from './Partner';
import PortfolioProject from './PortfolioProject';
import Banner from './Banner';
import Crew from './crew';
import Value from './Value';
import Service2 from './Service2';
import Career from './Career';
import Apply from './Apply';
import ContactForm from './Contact';
import Blogs from './Blogs';
import Reward from './reward';
import Bot from './Bot';
import Premium from './Premium';
import Ebook from './Ebook';
import LearnMore from './LearnMore';
import ProjectDetails from './ProjectDetails';

function App() {
  const [textData, setTextData] = useState('');

  useEffect(() => {
    fetchTextData();
  }, []);

  const fetchTextData = async () => {
    try {
      const response = await fetch('/api/get_text_data/');
      const data = await response.json();
      setTextData(data.text);
    } catch (error) {
      console.error('Error fetching text data:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/" element={<HomePage textData={textData} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/project-details/:projectId" element={<ProjectDetails />} />
          <Route path="/portfolioproject" element={<PortfolioProject />} />
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
        </Routes>
      </div>
    </Router>
  );
}

function HomePage({ textData }) {
  return (
    <>
      <Bot />
      <Portfolio/>
      <Services/>
      <About/>
      <RecentCase/>
      <Partner/>
      <Crew/>
      <Banner/>
      <Value/>
      <Cons/>
      <Footer/>
    </>
  );
}

const LearnMorePage = ({ category }) => {
  return (
    <div>
      <LearnMore uniqueClassName="learnmore-page" category={category} />
    </div>
  );
};

export default App;
