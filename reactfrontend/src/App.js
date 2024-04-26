import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom';
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

function App() {
  const [textData, setTextData] = useState('');
  const history = useHistory();

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

  const handleLearnMoreClick = () => {
    history.push('/learn-more'); // Navigate to the LearnMore route
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
          <Route path="/learn-more" element={<LearnMore />} /> {/* Route for LearnMore component */}
          <Route path="/" element={<HomePage textData={textData} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<ContactForm />} /> {/* Use ContactForm component here */}
          <Route path="/ebook" element={<Ebook />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage({ textData }) {
  return (
    <>
      <Bot />
      <Hero/>
      <Portfolio/>
      <About/>
      <Services/>
      <RecentCase/>
      <Partner/>
      <Crew/>
     <Banner/>
      <Value/>
      <Reward/>
      <Cons/>
      <Footer/>
    </>
  );
}

export default App;
