import React from 'react';
import './styles/NavList.css';
import logoImage from "../images/fashion-dress-icon.png";
import { CustomerService } from './CustomerService';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faBagShopping);
library.add(faPhone);

export const NavList = () => {
  return (
    <div className="main-nav-bar">

      <div className="image-and-name">
        <p>Sam's</p>
        <img src={logoImage} alt='Dress' />
        <p><strong>Gallery</strong></p>
      </div>

      <div className="buttons">
        <button>Our Collection</button>

        <button><FontAwesomeIcon icon="fa-solid fa-bag-shopping" />&nbsp; Shopping Bag</button>

        <button>Pending Purchases</button>

        <CustomerService />
      </div>
    </div>
  );
};