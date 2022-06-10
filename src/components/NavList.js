import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NavList.css';
import logoImage from "../images/fashion-dress-icon.png";
import { CustomerService } from './CustomerService';
import { OurCollection } from './OurCollection';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faBagShopping, faPhone);

export const NavList = () => {

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate('/');
  };
  const onClickAboutUs = () => {
    navigate('/AboutUs');
  };

  return (
    <div className="main-nav-bar">
      <div className="image-and-name">
        <div>Sam's</div>
        <img className='logo' onClick={onClickLogo} src={logoImage} alt='Logo' />
        <div><strong>Gallery</strong></div>
      </div>
      <div className="buttons">
        <button className='about-us' onClick={onClickAboutUs}>About Us</button>
        <OurCollection />
        <button><FontAwesomeIcon icon="fa-solid fa-bag-shopping" />&nbsp; Shopping Bag</button>
        <CustomerService />
      </div>
    </div>
  );
};