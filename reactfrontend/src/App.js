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
import ContactForm from './Contact'; // Import ContactForm component
import Blogs from './Blogs';
import Reward from './reward';
import Bot from './Bot';
import Premium from './Premium';
import Ebook from './Ebook';
import LearnMore from './LearnMore';

import ProjectDetails from './ProjectDetails';
import LearnMore2 from './LearnMore2';
import LearnMore3 from './LearnMore3';
import Learn_More4 from './Learn_More4';
import LearnMore5 from './LearnMore5';
import LearnMore6 from './LearnMore6';
import LearnMore7 from './LearnMore7';
import LearnMore8 from './LearnMore8';



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
          <Route path="/contact" element={<ContactForm />} /> {/* Use ContactForm component here */}
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/learnmore2" element={<LearnMore2 />} />
          <Route path="/learnmore3" element={<LearnMore3 />} />
          <Route path="/learnmore4" element={<Learn_More4 />} />
          <Route path="/learnmore5" element={<LearnMore5 />} />
          <Route path="/learnmore6" element={<LearnMore6 />} />
          <Route path="/learnmore7" element={<LearnMore7 />} />
          <Route path="/learnmore8" element={<LearnMore8 />} />
      
          <Route path="/project-details/:projectId" element={<ProjectDetails />} />
          <Route path="/portfolioproject" element={<PortfolioProject />} />
          
          
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

export default App;
