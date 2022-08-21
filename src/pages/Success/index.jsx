import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from '@components';
import AppContext from '../../context/AppContext';

const Success = () => {
  const { state } = useContext(AppContext);
  const { orders } = state;
  console.log(orders);
  return (
    <div>
      <h1>Compra Completa</h1>
      {orders[0]?.products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};
//10.50835,-66.9008658
export default Success;
