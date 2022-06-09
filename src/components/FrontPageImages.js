import React from 'react';
// import { useEffect, useState } from 'react';
// import frontImage1 from "../images/main-page-dress 1.jpeg";
// import frontImage2 from "../images/main-page-dress 2.jpeg";
// import frontImage3 from "../images/main-page-dress 3.jpeg";
// import banner from "../images/Banner.png";
import "./styles/FrontPageImages.css";

// const images = [frontImage1, frontImage2, frontImage3];
export const FrontPageImages = () => {
  // const [frontPageImagesData, setFrontPageImagesData] = useState(frontImage1);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setFrontPageImagesData(images[Math.floor(Math.random() * images.length)]);
  //     console.log("khaled", (Math.floor(Math.random() * images.length)));
  //   }, 2000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div className='image-wrapper'>
      {/* <img className='banner' src='/Banner.png' alt='Banner' /> */}
      {/* <img className='front-page-images' src={frontPageImagesData} alt="Dress1" /> */}
    </div>
  );
};
