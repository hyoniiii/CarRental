// import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  //Todo Main,Detail에 따라 헤더 다르게 표시
  return (
    <StHeader>
      <header>
        <h1>전체차량</h1>
      </header>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #000;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  header {
    text-align: center;
    padding: 1rem;
  }
`;
