import { useState } from 'react';
import emmaAvatar from '../../assets/image/Lab_02_b/avatar.png';
import italianTomato from '../../assets/image/Lab_02_b/Italian-style tomato.png';
import vegSpaghetti from '../../assets/image/Lab_02_b/Vegetable and shrimp spaghetti.png';
import lotusDelight from '../../assets/image/Lab_02_b/Lotus delight salad.png';
import snackCakes from '../../assets/image/Lab_02_b/Snack cakes.png';
import saladsWithCabbage from '../../assets/image/Lab_02_b/Salad with cabbage.png';
import beanShrimpSalad from '../../assets/image/Lab_02_b/Bean, shrimp, and potato salad.png';
import sunnyEggs from '../../assets/image/Lab_02_b/Sunny-side up fried eggs.png';
import lotusDelight01 from '../../assets/image/Lab_02_b/Lotus delight salad_01.png';
import shareIcon from '../../assets/image/Lab_02_b/Share fat.png';
import './RecipeBox.css';

const SAVED_RECIPES = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', image: italianTomato },
  { id: 2, title: 'Vegetable and shrimp spaghetti', time: '15 minutes', image: vegSpaghetti },
  { id: 3, title: 'Lotus delight salad', time: '20 minutes', image: lotusDelight },
  { id: 4, title: 'Snack cakes', time: '21 minutes', image: snackCakes },
  { id: 5, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: saladsWithCabbage },
  { id: 6, title: 'Bean, shrimp, and potato salad', time: '32 minutes', image: beanShrimpSalad },
  { id: 7, title: 'Sunny-side up fried eggs', time: '32 minutes', image: sunnyEggs },
  { id: 8, title: 'Lotus delight salad', time: '32 minutes', image: lotusDelight01 },
];

const TABS = ['Saved Recipes', 'Folders', 'Recipes by Genevieve'];

function RecipeBox() {
  const [activeTab, setActiveTab] = useState('Saved Recipes');

  return (
    <div className="recipe-box-page">
      <div className="recipe-box-page__inner">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Home</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="breadcrumb__active">Your Recipe Box</span>
        </nav>

        {/* Profile Section */}
        <section className="profile">
          <h1 className="profile__title">Emma Gonzalez's Recipe Box</h1>
          <div className="profile__content">
            <div className="profile__avatar-wrap">
              <img src={emmaAvatar} alt="Emma Gonzalez" className="profile__avatar" />
            </div>
            <div className="profile__info">
              <p className="profile__bio">
                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
              </p>
              <div className="profile__actions">
                <span className="profile__subscribers">6.5k Subscribers</span>
                <button className="btn-share">
                  Share
                  <img src={shareIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="recipe-box__tabs">
          <div className="tabs__list">
            {TABS.map(tab => (
              <button 
                key={tab} 
                className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="recipe-grid">
          {SAVED_RECIPES.map(recipe => (
            <div key={recipe.id} className="recipe-box-card">
              <div className="recipe-box-card__image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="recipe-box-card__body">
                <div className="recipe-box-card__header">
                  <h3 className="recipe-box-card__title">{recipe.title}</h3>
                  <button className="btn-bookmark" aria-label="Remove from saved">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                       <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z" />
                    </svg>
                  </button>
                </div>
                <div className="recipe-box-card__time">
                  {recipe.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination__arrow" aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="pagination__numbers">
            <button className="page-num active">1</button>
            <button className="page-num">2</button>
            <button className="page-num">3</button>
            <button className="page-num">4</button>
            <span className="page-dots">...</span>
            <button className="page-num">10</button>
            <button className="page-num">11</button>
          </div>
          <button className="pagination__arrow" aria-label="Next page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
