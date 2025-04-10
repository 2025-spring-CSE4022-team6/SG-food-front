import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import { instance } from "./../../api/instance";

export default function MyPage() {
  return (
    <Container>
      <h1>hello</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  //height: 100vh;
  align-items: center;
  justify-content: center;
`;
