import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'center' }}>
        <Link to={`/products/${product.id}`} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>View</Link>
        <button onClick={() => addToCart(product)} className="btn btn-primary" style={{ fontSize: '0.8rem' }}>Add</button>
      </div>
    </div>
  );
};

export default ProductCard;
