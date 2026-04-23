import { useState } from 'react';
import chefifyWhiteLogo from '../../assets/image/Lab_02/chefifywhite.png';
import './Footer.css';

const FOOTER_LINKS = {
  'Learn More': ['Our Cooks', 'See Our Features', 'FAQ'],
  'Shop': ['Gift Subscription', 'Send Us Feedback'],
  'Recipes': ['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas'],
};

function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* About Us */}
          <div className="footer__about">
            <h4 className="footer__col-title">About Us</h4>
            <p className="footer__about-text">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn-send">Send</button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4 className="footer__col-title">{title}</h4>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link} className="footer__link">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <img src={chefifyWhiteLogo} alt="Chefify" className="footer__logo" />
            <span className="footer__copyright">2023 Chefify Company</span>
            <span className="footer__policy">Terms of Service | Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
