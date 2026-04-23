import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container">
      <section style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '2rem', marginBottom: '1rem' }}>
        <h1 style={{ margin: 0 }}>Welcome to our store</h1>
        <p>This is a simple mini project using React Router.</p>
        <Link to="/products" className="btn btn-primary">Go to Products</Link>
      </section>

      <section>
        <h2 className="mb-2">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
