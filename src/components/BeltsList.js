import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BeltsListItem } from './BeltsListItem';

export const BeltsList = () => {
  const [beltsList, setBeltsList] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const [clickedItem, setClickedItem] = useState();
  const [itemId, setItemId] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/api/belts')
      .then((response) => {
        setBeltsList(response.data);
      });
  }, []);
  return (
    <div className='main-Collection-list'>
      {beltsList.map((val) => {
        return <div className='Collection-list' key={val.id}>
          <img className='Collection-images' src={`/images/${val.image_path}`} alt="belt" />
          <div className='item-name'>{val.name}</div>
          <div>${val.price}</div>
          <button onClick={() => { setItemId(val.id); setMoreDetails(true); setClickedItem(val); }} className='detail-button'>More Details</button>
          {moreDetails && clickedItem && itemId === val.id && <BeltsListItem backClick={setMoreDetails} clickedItem={clickedItem} />}
        </div>;
      })}
    </div>

  );
};
