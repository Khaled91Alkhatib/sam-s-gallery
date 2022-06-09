import React, { useState } from 'react';
import "./styles/OurCollection.css";

export const OurCollection = () => {

  const [ourCollectionData, setOurCollectionData] = useState(false);
  const onClick = () => {
    setOurCollectionData(current => !current);
  };

  return (
    <div>
      <button onClick={onClick} className='our-collection-button'>Our Collection</button>
      {ourCollectionData && (
        <div className='inner-collection-buttons'>
          <button className='items'>Hats</button>
          <button className='items'>Belts</button>
          <button className='items'>Dresses</button>
          <button className='items'>Shoes</button>
        </div>
      )}
    </div>
  );
};
