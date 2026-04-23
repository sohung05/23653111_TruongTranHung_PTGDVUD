import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '1rem' }}>Back</button>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <img src={product.image} alt={product.name} style={{ maxWidth: '300px', width: '100%' }} />
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h2>{product.name}</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary" style={{ marginTop: '1rem' }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
