import React from 'react';
import './ServicesPage.css';
import blog1 from './image/industry.jpg';
import Footer from './Footer';
import Service2 from './Service2';

const ServicesPage = () => {
  return (
    <main className="servicespage-page">
      <section className="image-container">
        <img src={blog1} alt="Industry landscape representing various sectors" className="background-image" />
        <div className="centered-text">
          <h1>Industries We Serve</h1>
          <h3>Transforming Challenges into Opportunities with AI</h3>
          <p>
            At System Heuristics, we harness the transformative power of Artificial Intelligence (A.I) to propel innovation and accelerate growth across a variety of sectors. Our tailored AI solutions are crafted to meet the distinctive needs of each industry, empowering businesses to not only succeed but also set new benchmarks of excellence. Discover how our state-of-the-art AI technologies are revolutionizing industries by enhancing precision, optimizing efficiency, and providing an unparalleled competitive edge. Join us as we redefine what's possible and turn today’s challenges into tomorrow's opportunities.
          </p>
          <p>
            As a leading Software Company, we specialize in AI-driven Software Development and Outsourcing solutions. Our expertise spans various industries, enabling us to deliver customized services that address unique business challenges and drive sustainable growth.
          </p>
        </div>
      </section>
      <Service2 />
      <Footer />
    </main>
  );
};

export default ServicesPage;
