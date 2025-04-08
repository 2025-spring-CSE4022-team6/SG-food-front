import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className="headbox">
        {/* 왼쪽: 로고 이미지 */}
        <div className="headbox-left">
          <img
            src={'/img/pubpicklogo.png'}
            alt="Cutlery Icon"
            className="cutlery-icon"
          />
        </div>
  
        {/* 가운데: 코럴색 배경 + 흰색 타이틀 */}
        <div className="headbox-center">
          <h1>Pub Pick</h1>
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