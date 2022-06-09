import React from 'react';
import './styles/NavList.css';
import logoImage from "../images/fashion-dress-icon.png";
import { CustomerService } from './CustomerService';
import { OurCollection } from './OurCollection';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faBagShopping, faPhone);

export const NavList = () => {
  return (
    <div className="main-nav-bar">

      <div className="image-and-name">
        <div>Sam's</div>
        <img className='logo' src={logoImage} alt='Logo' />
        <div><strong>Gallery</strong></div>
      </div>

      <div className="buttons">
        <OurCollection />

        <button><FontAwesomeIcon icon="fa-solid fa-bag-shopping" />&nbsp; Shopping Bag</button>

        <button>Pending Purchases</button>

        <CustomerService />
      </div>
    </div>
  );
};