import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.title + ' Image'} />
      <div className="ProductInfo">
        <h2 className="ProductName">
          {product.title} <span className="ProductPrice">{product.price}$</span>
        </h2>
        <p className="ProductDescription">{product.description}</p>
      </div>
      {handleAddToCart && (
        <button
          type="button"
          className="ButtonProductCard"
          onClick={() => handleAddToCart(product)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Comprar
        </button>
      )}
    </div>
  );
}

export default ProductCard;
