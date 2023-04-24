import React, { useState } from 'react';
// import './SliderCard.css';

const SliderCard = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-card">
      <div className="slider-card__arrow left-arrow" onClick={prevSlide}>
        &lt;
      </div>
      <div className="slider-card__arrow right-arrow" onClick={nextSlide}>
        &gt;
      </div>
      {data.map((item, index) => {
        return (
          <div
            className={index === current ? 'slider-card__slide active' : 'slider-card__slide'}
            key={index}
          >
            <img src={item.image} alt={item.alt} />
            <div className="slider-card__caption">{item.caption}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SliderCard;
