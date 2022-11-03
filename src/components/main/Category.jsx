import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'large',
    text: '대형',
  },
  {
    name: 'mid',
    text: '소형',
  },
  {
    name: 'small',
    text: '소형',
  },
  {
    name: 'suv',
    text: 'SUV',
  },
];

const Category = ({ onSelect, category }) => {
  return (
    <StCategory>
      {categories.map((c) => (
        <button key={c.name} onClick={() => onSelect(c.name)} active={category === c.name ? 'active' : ''}>
          {c.text}
        </button>
      ))}
    </StCategory>
  );
};
export default Category;

const StCategory = styled.div`
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  button {
    padding: 0.2rem 1rem;
    margin: 0.5rem 0.3rem;
    border: none;
    background-color: #d9d9d9;
    border-radius: 0.6rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
