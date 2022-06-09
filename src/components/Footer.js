import React from 'react';
import "./styles/Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <strong>
          Location
          <br />
        </strong>
        Eaton Center
        <br />
        220 Yonge St, Toronto, ON M5B 2H1
        {/* <br />
          khaledkhatib91@hotmail.com */}
      </div>
      <div className='shop-hours'>
        <strong>
          Shop Hours
          <br />
        </strong>
        Monday - Friday: 10 - 5
        <br />
        Saturday: 10 - 6
        <br />
        Sunday: 10 - 4
      </div>
      <div className='enquiries'>
        <strong>
          For More Enquiries
          <br />
        </strong>
        khaledkhatib91@hotmail.com
      </div>
    </div>
  );
};
