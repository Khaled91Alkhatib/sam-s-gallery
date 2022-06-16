import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DressesListItem } from './DressesListItem';

export const DressesList = () => {
  const [dressesList, setDressesList] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const [clickedItem, setClickedItem] = useState();
  const [itemId, setItemId] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/api/dresses')
      .then((response) => {
        setDressesList(response.data);
      });
  }, []);

  return (
    <div className='main-Collection-list'>
      {dressesList.map((val) => {
        return <div className='Collection-list' key={val.id}>
          <img className='dresses-images' src={`/images/${val.image_path}`} alt="dress" />
          <div className='item-name'>{val.name}</div>
          <div>${val.price}</div>
          <button onClick={() => { setItemId(val.id); setMoreDetails(true); setClickedItem(val); }} className='detail-button'>More Details</button>
          {moreDetails && clickedItem && itemId === val.id && <DressesListItem backClick={setMoreDetails} clickedItem={clickedItem} />}
        </div>;
      })}
    </div>

  );
};
