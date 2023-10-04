import React from 'react';
import { useParams } from 'react-router-dom';
import ShopPage from '../../Pages/Shop page/ShopPage';

function Category() {
  const { category } = useParams<{ category?: string }>();
  const categoryValue = category ?? 'all-categories';
  return <ShopPage category={categoryValue} />;
}

export default Category;
