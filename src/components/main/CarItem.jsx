import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarItem = ({ car }) => {
  const { brand, name, segment, fuelType, imageUrl } = car.attribute;
  return (
    <StCarItem>
      <div key={car.id} className="carList">
        <ul className="info">
          <li className="brand">
            <h4>{brand}</h4>
          </li>
          <li className="name">
            <h4>{name}</h4>
          </li>
          <div className="type">
            <li>{segment}</li>
            <li> / {fuelType}</li>
          </div>
          <li>월 {car.amount} 원 부터</li>
        </ul>
        <ul className="imgUrl">
          <li>
            <img alt="car" src={imageUrl} />
          </li>
        </ul>
      </div>
    </StCarItem>
  );
};

export default CarItem;

const StCarItem = styled.div`
  img {
    width: 100%;
  }
  .carList {
    display: flex;
    border-bottom: 1px solid #000;
  }
  .info {
    flex: 1;
    margin: 1rem;
  }
  .brand {
    margin-top: 1rem;
  }
  .name {
    margin-bottom: 1rem;
  }
  .type {
    display: flex;
  }
  .imgUrl {
    flex: 1;
    background-color: #d9d9d9;
    margin: 1rem;
  }
`;
