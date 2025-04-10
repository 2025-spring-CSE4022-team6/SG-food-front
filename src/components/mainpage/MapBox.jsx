import React from "react";
import "./MapBox.css";

const MapBox = () => {
  return (
    <div className="mapbox">
      {/* 향후 Map API가 삽입될 영역 */}
      <img
        src="/img/map-default.jpg" // ✅ public 폴더 기준
        alt="지도 예시"
        className="mapbox-img"
      />
    </div>
  );
};

export default MapBox;
