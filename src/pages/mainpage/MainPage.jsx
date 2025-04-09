import React from "react";
import "./MainPage.css";
import BottomButtons from "../../components/mainpage/bottomButtons";
import Pics from "../../components/mainpage/Pics";
import MapBox from "../../components/mainpage/MapBox";

const MainPage = () => {
  return (
    <div className="mainpage">
      <MapBox />
      <Pics />
      <BottomButtons />
    </div>
  );
};

export default MainPage;
