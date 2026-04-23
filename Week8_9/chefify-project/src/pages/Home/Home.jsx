import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import RecipeSection from '../../components/RecipeSection/RecipeSection';
import DiscoverModal from '../../components/DiscoverModal/DiscoverModal';
import './Home.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <span className="newsletter__label">Stay Updated</span>
          <h2 className="newsletter__title">
            Get Weekly Recipe<br />Inspiration
          </h2>
          <p className="newsletter__subtitle">
            Join over 50,000 food lovers and get fresh recipes<br />delivered to your inbox every week.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="newsletter__btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="home">
      <DiscoverModal />
      <Hero />
      <RecipeSection />
      <Newsletter />
    </main>
  );
}

export default Home;
