import { useState } from 'react';
import { RATING_IMAGES } from '../../data/recipes';
import './RecipeCard.css';

const BookmarkIcon = ({ saved }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={saved ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z" />
  </svg>
);

function RecipeCard({ recipe }) {
  const [saved, setSaved] = useState(false);

  const ratingImg = RATING_IMAGES[recipe.rating] || RATING_IMAGES[4];

  return (
    <article className="recipe-card">
      {/* Image */}
      <div className="recipe-card__image-wrap">
        <img src={recipe.image} alt={recipe.title} loading="lazy" />

        {/* Bookmark */}
        <button
          className="recipe-card__bookmark"
          onClick={(e) => {
            e.stopPropagation();
            setSaved((prev) => !prev);
          }}
          aria-label={saved ? 'Remove from saved' : 'Save recipe'}
        >
          <BookmarkIcon saved={saved} />
        </button>

        {/* Time */}
        <span className="recipe-card__time">
          <ClockIcon />
          {recipe.time}
        </span>
      </div>

      {/* Body */}
      <div className="recipe-card__body">
        <h3 className="recipe-card__title">{recipe.title}</h3>

        {/* Rating */}
        <div className="recipe-card__rating">
          <img src={ratingImg} alt={`${recipe.rating} stars`} />
          <span className="recipe-card__reviews">({recipe.reviews} reviews)</span>
        </div>

        {/* Author */}
        <div className="recipe-card__author">
          <img
            src={recipe.authorAvatar}
            alt={recipe.author}
            className="recipe-card__author-avatar"
          />
          <span className="recipe-card__author-name">{recipe.author}</span>
          <button className="recipe-card__share" aria-label="Share recipe">
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
