import React from 'react';
import "./styles/AboutUs.css";
import { useEffect, useState } from 'react';
import leftImage2 from "../images/main-page-dress 2.jpeg";
import leftImage1 from "../images/main-page-dress 1.jpeg";
import leftImage3 from "../images/main-page-dress 3.jpeg";
import rightImage1 from "../images/right1.jpeg";
import rightImage2 from "../images/right2.jpeg";
import rightImage3 from "../images/right3.jpeg";

const leftImages = [leftImage1, leftImage2, leftImage3];
const rightImages = [rightImage1, rightImage2, rightImage3];

export const AboutUs = () => {
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {

      setLeftImageIndex(prev => {
        console.log(prev);
        if (prev === leftImages.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });

      setRightImageIndex(prev => {
        if (prev === rightImages.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='all-about-us'>
      <img className='front-page-images' src={leftImages[leftImageIndex]} alt="Dress1" />
      <div className='about-us-text'>
        Sam's Gallery is a leading luxury clothing brand, designed in Canada, known for their highly covetable collection of women's outfits and accessories.
        <br />
        <br />
        Founded in 2022 by Khaled Alkhatib, Sam's Gallery brand is named after his Brother, Samer Alkhatib.
      </div>
      <img className='front-page-images' src={rightImages[rightImageIndex]} alt="Dress1" />
    </div>
  );
};
