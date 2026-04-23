import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <section>
        <h1>Our Products</h1>
        <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: 'none' }}
          />
        </div>
        <div className="product-grid">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
