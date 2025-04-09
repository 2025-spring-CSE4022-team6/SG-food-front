import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headbox">
      {/* 왼쪽: 로고 + 텍스트 한 덩어리 */}
      <div className="headbox-brand">
        <img
          src={"/img/pubpicklogo.png"}
          alt="Pub Pick Logo"
          className="cutlery-icon"
        />
        <h1 className="brand-title">Pub Pick</h1>
      </div>

      {/* 오른쪽: 햄버거 메뉴 버튼 */}
      <div className="headbox-right">
        <button className="menu-button">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
