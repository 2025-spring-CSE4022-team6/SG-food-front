import React from "react";
import "./MainPage.css";
import KakaoMap from "../../components/mainpage/KaKaoMap";
import Header from "../../components/common/Header";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Header />
      <KakaoMap />
    </div>
  );
};

export default MainPage;
