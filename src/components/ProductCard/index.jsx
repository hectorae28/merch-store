import React from 'react';
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
        {handleAddToCart && (
          <button type="button" onClick={() => handleAddToCart(product)}>
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
