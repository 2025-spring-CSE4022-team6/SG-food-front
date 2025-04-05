import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import MainPage from "./pages/mainpage/MainPage";
// import BankbookPage from "./pages/bankbook/bankbook";

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          {/* Header가 필요 없는 페이지들 */}
          {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

          {/* Header가 필요한 페이지들 */}
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/bankbook" element={<BankbookPage />} /> */}
          {/* <Route path="/bankbook/:id" element={<BankbookPage />} /> */}
          <Route element={<Layout />}>
            {/* <Route path="/bankbook" element={<CreateBankbook />} /> */}
          </Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 56.25vh;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: var(--bg-color);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default App;
