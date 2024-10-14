import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import image1 from '../assets/images/makeup1.jpg';
import image2 from '../assets/images/makeup2.jpg';
import image3 from '../assets/images/makeup3.jpg';
import image4 from '../assets/images/makeup4.jpg';
import image5 from '../assets/images/makeup5.jpg';
import image6 from '../assets/images/makeup6.jpg';

const slides = [
  { image: image1, title: "@makeoversbytanmayi" },
  { image: image2, title: "@makeoversbyshrimayi" },
  { image: image3, title: "@makeoversbymrunnmayi" },
  { image: image4, title: "@makeoversbychinnmayi" },
  { image: image5, title: "@makeoversbydevmayi" },
  { image: image6, title: "@makeoversbydevmayi" }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Slide change interval (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{
          transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
          transition: 'transform 1s ease'
        }}
      >
        {slides.concat(slides).map((slide, index) => (
          <div className="slide" key={index} style={{ width: `${100 / slides.length}%` }}>
            <img src={slide.image} alt={slide.title} />
            <p>{slide.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
