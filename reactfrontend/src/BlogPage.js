import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import BlogPage2 from './BlogPage2';
import Blogs from './Blogs'
import Premium from './Premium';

const BlogPage = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchSliderData = async () => {
            try {
                const response = await fetch('/api/slider_data'); // Replace '/api/slider_data' with your actual backend endpoint URL
                if (!response.ok) {
                    throw new Error('Failed to fetch slider data');
                }
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('Error fetching slider data:', error);
            }
        };

        fetchSliderData();
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [slides]);

    return (
        <div className="blog-page">
            {slides.length > 0 && (
                <div className="heading-container" style={{backgroundImage: `url(${slides[currentSlide].image_url})`}}>
                    <h1>{slides[currentSlide].image_text}</h1>
                </div>
            )}
            <div className="slider-arrows">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            <>
            <BlogPage2/>
            <Blogs/>
            <Premium/>
            
            
            </>
           
        </div>

    );
}

export default BlogPage;
