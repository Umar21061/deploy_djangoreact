import React, { useEffect } from 'react';
import './Testimonial.css';
import circleImage from './image/umar.jpg';

const Testimonial = () => {
  // Define an array of testimonial data
  const testimonials = [
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "John Doe",
      company: "Company XYZ"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Jane Smith",
      company: "Company ABC"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Sarah Johnson",
      company: "Company 123"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Michael Brown",
      company: "Company ZYX"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "John Doe",
      company: "Company XYZ"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Jane Smith",
      company: "Company ABC"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Sarah Johnson",
      company: "Company 123"
    },
    {
      text: "System Heuristics Company is at the forefront of evolutionizing business systems analysis and optimization, setting new standards for innovation and efficiency.",
      name: "Michael Brown",
      company: "Company ZYX"
    },
  ];

  useEffect(() => {
    const blocks = document.querySelector('.blocks');

    let scrollSpeed = 1;
    let isHovered = false;

    const scrollBlocks = () => {
      if (!isHovered) {
        blocks.scrollLeft += scrollSpeed;
        if (blocks.scrollLeft >= blocks.scrollWidth - blocks.clientWidth || blocks.scrollLeft <= 0) {
          scrollSpeed = -scrollSpeed;
        }
      }
    };

    const intervalId = setInterval(scrollBlocks, 20);

    blocks.addEventListener('mouseover', () => {
      isHovered = true;
    });

    blocks.addEventListener('mouseout', () => {
      isHovered = false;
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className="testimonial">
        <div className="heading-class">Reviews</div>
        <div className="description">This is our views description</div>
        <div className="blocks">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="block">
              <p>{testimonial.text}</p>
              <div className="center">
                <img src={circleImage} alt="Circle" className="circle-image" />
              </div>
              <div className="name-company">
                <div className="color-layer"></div>
                <div className="name">{testimonial.name}</div>
                <div className="company">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="curve"></div>
    </div>
  );
};

export default Testimonial;
