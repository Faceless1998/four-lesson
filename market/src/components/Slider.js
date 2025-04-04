import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slider.css";
import IMG1 from "./../assets//41QKCkQ2A5L.jpg"

const products = [
    {id:1, img:{IMG1}, name:"samsung best", price:"2000"},

]
const Slider = () => {
  const totalProducts = 20;
  const productsPerView = 6;

  const maxIndex = totalProducts - productsPerView + 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 6);
    }
  };

  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
  ];

  const products = Array.from({ length: totalProducts }, (_, index) => (
    <div
      key={index}
      className="product-card"
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      product {index + 1}
    </div>
  ));

  return (
    <>
      <div className="slider-container">
        <div className="slider-title">SLIDER</div>

        <div className="slider-wrapper">
          <button onClick={prevProduct} disabled={currentIndex === 0}>
            <FaArrowAltCircleLeft />
          </button>

          <div className="slider-view">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 170}px)` }}
            >
              {products}
            </div>
          </div>

          <button onClick={nextProduct} disabled={currentIndex >= maxIndex}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
