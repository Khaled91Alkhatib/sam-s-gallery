import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const HatsItems = () => {
  const [hatslist, setHatsList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/hats')
      .then((response) => {
        setHatsList(response.data);
      });
  }, []);

  return (
    <div>
      <div>HatsItems</div>
      {hatslist.map((val) => {
        return <div key={val.id}>
          {val.name}
          <br />
          {val.description}
          <br />
          <img src={`/images/${val.image_path}`}/>
        </div>;

      })}
    </div>
  );
};
