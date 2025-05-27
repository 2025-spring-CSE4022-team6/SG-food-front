import React, { useEffect, useState } from "react";
import Map from "./mapcomp/Map.jsx";
import Pics from "./Pics.jsx";
import MapBox from "./mapcomp/MapBox.jsx";
//import { picData } from "./picData.js";
import {instance} from "../../api/instance.js";

const KakaoMap = ({ keyword }) => {
  // Fetch data from the API
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPics = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await instance.get("/place");
        setData(response.data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchPics();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{color:"red"}}>{error}</div>;
  }


  const filteredData = picData.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <MapBox>
        <Map
          data={filteredData} // map의 data에 pic data 저장
          selectedIndex={selectedIndex}
          onMarkerClick={setSelectedIndex}
        />
      </MapBox>
      <Pics
        data={filteredData} // pic의 data에 pic data 저장
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
    </>
  );
};

export default KakaoMap;
