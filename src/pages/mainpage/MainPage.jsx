import React from "react";
import "./MainPage.css";
import BottomButtons from "../../components/mainpage/bottomButtons"
import Header from "../../components/mainpage/header";
import Pics from "../../components/mainpage/Pics";
import MapBox from "../../components/mainpage/MapBox";

const MainPage = () => {
    return (
        <div className="mainpage">
            <Header />
            <MapBox />
            <Pics />
            <BottomButtons />
        </div>
    );
};

export default MainPage;
    