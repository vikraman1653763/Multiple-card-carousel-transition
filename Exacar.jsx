import React, { useState } from "react";
import "./Exacar.css";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  
 
];

const Slide = ({ slide, isActive, position }) => {
  return (
<li className={`ex-01-slide ex-01-slide--${position} ${isActive ? "ex-01-slide--current" : ""}`}>
<div className="ex-01-slide__image-wrapper">
        <img className="ex-01-slide__image" alt={slide.headline} src={slide.src} />
      </div>
      <article className="ex-01-slide__content">
        <h2 className="ex-01-slide__headline">{slide.headline}</h2>
        <button className="ex-01-slide__action">{slide.button}</button>
      </article>
    </li>
  );
};

const Exacar = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slideData.length;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ex-01-slider">
      <ul className="ex-01-slider__wrapper">
      {slideData.map((slide, index) => {
  let diff = index - current;
  // Wrap diff so that only -1, 0, or 1 are used
  if (diff > 1) diff -= totalSlides;
  if (diff < -1) diff += totalSlides;

  const positionClass = diff === -1 ? "prev" : diff === 0 ? "current" : diff === 1 ? "next" : "";
  return (
    <Slide
      key={slide.index}
      slide={slide}
      isActive={index === current}
      position={positionClass}
    />
  );
})}


      </ul>
      <div className="ex-01-slider__controls">
        <button className="ex-01-btn" onClick={handlePreviousClick}>
          Prev
        </button>
        <button className="ex-01-btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Exacar;



