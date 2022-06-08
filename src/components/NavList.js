import React from 'react';
import './styles/NavList.css';
import logoImage from "../images/fashion-dress-icon.png";

export const NavList = () => {
  return (
    <div>
      <div class="image-and-name">
        <p>Sam's</p>
        <img src={logoImage} alt='Dress' />
        <p><strong>Gallery</strong></p>
      </div>
      <div class="main-nav">
        <button>Gallery</button>
        <button>Customer Service</button>
        <button>Shopping bag</button>
        <button>Pending orders</button>
      </div>
    </div>
  );
};