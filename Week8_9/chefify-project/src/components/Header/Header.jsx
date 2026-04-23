import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import chefifyLogo from '../../assets/image/Lab_02/chefify.png';
import avatarImg from '../../assets/image/Lab_02/avatar.png';
import archiveCheck from '../../assets/image/Lab_02_b/archive_check.png';
import { NAV_ITEMS } from '../../constants';
import './Header.css';

function Header({ onLoginClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('cakescascsa');

  const performSearch = () => {
    if (searchValue.toLowerCase().trim() === 'salad') {
      navigate('/category/salad');
    } else {
      navigate('/search');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <img src={chefifyLogo} alt="Chefify" />
        </Link>

        {/* Search Bar */}
        <div className="header__search">
          <svg
            className="header__search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={performSearch}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
            aria-label="Search recipes"
          />
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`header__nav-item ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header__actions">
          <button className="btn-recipe-box" onClick={() => navigate('/recipes')}>
            <img src={archiveCheck} alt="" />
            <span>Your Recipe Box</span>
          </button>
          <img src={avatarImg} alt="User avatar" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
