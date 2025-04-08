import React, {use, useState} from 'react';
import Pic from './Pic';
import './Pics.css';



// 예시 데이터
const picData = [
    
  {
    id: 1,
    name: '고주파',
    rating: 4.8,
    reviewCount: 500,
    tags: ['맛', '분위기', '가성비'],
    imageSrc: '/img/cutlery.png', // public 폴더에 img/cutlery.png
  },
  {
    id: 2,
    name: '홍등롱',
    rating: 4.7,
    reviewCount: 350,
    tags: ['맛', '분위기'],
    imageSrc: '/img/cutlery.png',
  },
  {
    id: 3,
    name: '서강포차',
    rating: 4.9,
    reviewCount: 420,
    tags: ['가성비'],
    imageSrc: '/img/cutlery.png',
  },
  {
    id: 4,
    name: '낭만 오지',
    rating: 4.5,
    reviewCount: 420,
    tags: ['가성비'],
    imageSrc: '/img/cutlery.png',
  },
  // 필요에 따라 더 많은 아이템 추가
];

const Pics = () => {
    let [imgsrc,imgsrcchange] = useState('/img/food_default.svg');
  return (
    <div className="pics-container">
      {picData.map((item) => (
        <Pic
          key={item.id}
          name={item.name}
          rating={item.rating}
          reviewCount={item.reviewCount}
          tags={item.tags}
          imageSrc={imgsrc}
        />
      ))}
    </div>
  );
};

export default Pics;
