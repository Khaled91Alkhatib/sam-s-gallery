import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles/CollectionList.css";
import { HatsListItem } from './HatsListItem';


export const HatsList = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [hatslist, setHatsList] = useState([]);
  const [clickedItem, setClickedItem] = useState();
  const [itemId, setItemId] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/api/hats')
      .then((response) => {
        setHatsList(response.data);
      });
  }, []);

  // console.log("clicked item", clickedItem)

  return (
    <div className='main-Collection-list'>
      {hatslist.map((val) => {
        return <div className='Collection-list' key={val.id}>
          <img className='Collection-images' src={`/images/${val.image_path}`} alt="hat" />
          <div className='item-name'>{val.name}</div>
          <div>${val.price}</div>
          <button onClick={() => { setItemId(val.id); setMoreDetails(true); setClickedItem(val); }} className='detail-button'>More Details</button>
          {moreDetails && clickedItem && itemId === val.id && <HatsListItem backClick={setMoreDetails} clickedItem={clickedItem} />}
        </div>;
      })}
    </div>
  );
};
