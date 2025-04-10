// src/components/review/BookmarkToggle.jsx
import React, { useState } from "react";
import styled from "styled-components";

const BookmarkContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transform: translateY(6px);
`;

const BookmarkImage = styled.img`
  height: 90%;
  object-fit: contain;
`;

const BookmarkToggle = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); // ✅ 카드 전체 클릭 방지
    setBookmarked((prev) => !prev);
  };

  return (
    <BookmarkContainer onClick={handleToggle}>
      <BookmarkImage
        src={
          bookmarked
            ? "/img/icon_bookmark_up.png"
            : "/img/icon_bookmark_down.png"
        }
        alt="Bookmark Toggle"
      />
    </BookmarkContainer>
  );
};

export default BookmarkToggle;
