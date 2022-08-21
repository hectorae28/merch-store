import React from 'react';
import { ProductList } from '@components';
import initialState from '../../initialState';

function Home() {
  return (
    <div className="Home">
      <ProductList products={initialState.products} />
    </div>
  );
}

export default Home;
