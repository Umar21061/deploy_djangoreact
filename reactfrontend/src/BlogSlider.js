import React, { useEffect, useState } from 'react';
import './BlogSlider.css';
import blog1 from './image/blog1.png';
import blog2 from './image/blog2.png';
import blog3 from './image/blog3.png';
import blog4 from './image/blog4.png';
import blog5 from './image/blog5.png';

const BlogSlider = () => {
  const images = [blog1, blog2, blog3, blog4, blog5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning) return;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0);
    }
  };

  const onSlideChange = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="blog-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 1s ease-in-out' : 'none' }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[...images, images[0]].map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Blog ${index + 1}`} />
            <div className="image-text">Innovative Partnerships: Creating Impactful Brands Together</div>
          </div>
        ))}
      </div>
      <div className="scroll-indicator">
        {images.map((_, index) => (
          <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => onSlideChange(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
