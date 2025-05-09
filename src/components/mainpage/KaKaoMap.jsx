import React, { useState } from 'react';
import Map from './mapcomp/Map.jsx';
import Pics from './Pics.jsx';
import MapBox from './mapcomp/MapBox.jsx'
import { picData } from './picData.js';

const KakaoMap = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <MapBox>
        <Map
          data = {picData} // map의 data에 pic data 저장
          selectedIndex={selectedIndex}
          onMarkerClick={setSelectedIndex} 
        />
      </MapBox>
      <Pics
        data={picData} // pic의 data에 pic data 저장
        selectedIndex={selectedIndex} 
        onSelect={setSelectedIndex} 
      />
    </>
  );
};


export default KakaoMap;