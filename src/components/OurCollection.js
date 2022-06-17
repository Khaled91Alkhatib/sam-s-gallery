import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/OurCollection.css";

export const OurCollection = () => {
  const navigate = useNavigate();

  const onClickHats = () => {
    navigate('/Hats');
  };

  const onClickBelts = () => {
    navigate('/Belts');
  };

  const onClickDresses = () => {
    navigate('/Dresses');
  };

  const onClickShoes = () => {
    navigate('/Shoes');
  };

  const [ourCollectionData, setOurCollectionData] = useState(false);
  const onClickOurCollection = () => {
    setOurCollectionData(current => !current);
  };

  return (
    <div>
      <button onClick={onClickOurCollection} className='our-collection-button'>Our Collection</button>
      {ourCollectionData && (
        <div className='inner-collection-buttons'>
          <button onClick={onClickHats} className='items'>Hats</button>
          <button onClick={onClickBelts} className='items'>Belts</button>
          <button onClick={onClickDresses} className='items'>Dresses</button>
          <button onClick={onClickShoes} className='items'>Shoes</button>
        </div>
      )}
    </div>
  );
};
