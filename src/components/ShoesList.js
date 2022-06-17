import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ShoesListItem } from './ShoesListItem';

export const ShoesList = () => {
  const [shoesList, setShoesList] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const [clickedItem, setClickedItem] = useState();
  const [itemId, setItemId] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/api/shoes')
      .then((response) => {
        setShoesList(response.data);
      });
  }, []);


  return (
    <div className='main-Collection-list'>
      {shoesList.map((val) => {
        return <div className='Collection-list' key={val.id}>
          <img className='Collection-images' src={`/images/${val.image_path}`} alt="hat" />
          <div className='item-name'>{val.name}</div>
          <div>${val.price}</div>
          <button onClick={() => { setItemId(val.id); setMoreDetails(true); setClickedItem(val); }} className='detail-button'>More Details</button>
          {moreDetails && clickedItem && itemId === val.id && <ShoesListItem backClick={setMoreDetails} clickedItem={clickedItem} />}
        </div>;
      })}
    </div>
  );
};
