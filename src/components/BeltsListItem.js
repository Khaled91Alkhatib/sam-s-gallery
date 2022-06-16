import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlus, faCircleMinus);


export const BeltsListItem = ({ backClick, clickedItem }) => {

  const [counter, setCounter] = useState(0);
  const onPlusClick = () => {
    setCounter(counter + 1);
  };
  const onMinusClick = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className='overlay-style'>
      <div className='background'>
        <div key={clickedItem.id}>
          <div className='data-to-button'>
            <div>
              <div className='single-item-name'>
                {clickedItem.name}
              </div>
              ${clickedItem.price}
              <br />
              <br />
              <div className='item-description'>
                {clickedItem.description}
              </div>
            </div>
            <div className='both-buttons'>
              <button className='item-buttons' onClick={() => { backClick(false); }}>back</button>
              <div>
                <div className='plus-counter-minus'>
                  <button className='plus-minus' onClick={onMinusClick}><FontAwesomeIcon icon="fa-solid fa-circle-minus" /></button>
                  <div>{counter}</div>
                  <button className='plus-minus' onClick={onPlusClick}><FontAwesomeIcon icon="fa-solid fa-circle-plus" /></button>
                </div>
                <button className='item-buttons' >Add to shopping bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
