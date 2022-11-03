import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCarList } from '../../apis/apis';
import CarItem from './CarItem';

const CarList = ({ category }) => {
  const [carList, setCarList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //Fix 카테고리 값이 undefined
        const query = category === 'all' ? '' : `?segment=${category}`;
        const response = await getCarList.getAll(query);
        console.log(query);
        if (response.data?.payload.length > 0) {
          setCarList(response.data.payload);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <CarListBlock>로딩 중 ...</CarListBlock>;
  }
  if (!carList) {
    return <CarListBlock>차량이 없습니다.</CarListBlock>;
  }

  return (
    <CarListBlock>
      {carList.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </CarListBlock>
  );
};

export default CarList;

const CarListBlock = styled.div``;
