import React, { useCallback, useState } from 'react';
import Category from '../components/main/Category';
import CarList from '../components/main/CarList';

const MainPage = () => {
  const [category, setCategory] = useState('');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Category category={category} onSelect={onSelect} />
      <CarList />
    </div>
  );
};

export default MainPage;
