import heroBg from '../../assets/image/Lab_01/Image 73.png';
import './Hero.css';

const FEATURES = [
  'Access 10,000+ curated recipes',
  'Step-by-step cooking guides',
  'Save & organize your favorites',
  'Exclusive chef tips & techniques',
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

function Hero() {
  return (
    <section className="hero">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Delicious food hero"
        className="hero__bg"
      />

      {/* Gradient overlay */}
      <div className="hero__overlay" />

      {/* Left – Subscription card */}
      <div className="hero__card">
        {/* Yellow floating badge */}
        <button className="hero__card-badge">
          🌟 New subscription plan
        </button>

        <p className="hero__card-eyebrow">Premium Membership</p>

        <h2 className="hero__card-title">
          Unlock <span>Unlimited</span> Recipes
        </h2>

        <p className="hero__card-desc">
          Join thousands of home cooks and professional chefs. Get access to exclusive recipes, video tutorials, and personalized meal plans.
        </p>

        <ul className="hero__card-features">
          {FEATURES.map((feature, index) => (
            <li key={index} className="hero__card-feature">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="hero__card-cta">
          Start Free Trial
        </button>
      </div>

      {/* Right – Hero headline */}
      <div className="hero__content">
        <span className="hero__tag">🍴 Welcome to Chefify</span>
        <h1 className="hero__title">
          Cook with<br />
          <span>Passion</span>,<br />
          Eat with Joy
        </h1>
        <p className="hero__subtitle">
          Discover thousands of recipes crafted by professional chefs and home cooks from around the world.
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">10K+</span>
            <span className="hero__stat-label">Recipes</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Chefs</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">2M+</span>
            <span className="hero__stat-label">Users</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__discover">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        Explore Recipes
      </div>
    </section>
  );
}

export default Hero;
