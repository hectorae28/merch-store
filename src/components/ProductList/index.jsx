import React, { useContext } from 'react';
import { ProductCard } from '@components';
import AppContext from '../../context/AppContext';
import './styles.css';

function ProductList() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  const handleAddToCart = (product) => addToCart(product);
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
