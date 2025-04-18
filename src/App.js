import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import "./styles/font.css";
import GlobalStyle from "./styles/GlobalStyle";

import Layout from "./components/Layout";

import MainPage from "./pages/mainpage/MainPage";
import ReviewDetail from "./pages/review_detail/ReviewDetail";
import RestaurantDetail from "./pages/restaurant/RestaurantDetail";
import MyPage from "./components/mypage/MyPage";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route
              path="/restaurant/:id/review/:id"
              element={<ReviewDetail />}
            />
          </Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 56.25vh;
  margin: 0 auto;
  background-color: var(--bg-color);
`;

export default App;
