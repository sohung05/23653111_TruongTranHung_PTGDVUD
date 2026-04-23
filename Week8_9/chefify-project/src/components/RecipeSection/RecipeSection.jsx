import { useState, useMemo } from 'react';
import { RECIPES } from '../../data/recipes';
import { RECIPE_CATEGORIES } from '../../constants';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeSection.css';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

function RecipeSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRecipes = useMemo(() => {
    if (activeCategory === 'all') return RECIPES;
    return RECIPES.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="recipe-section">
      {/* Section header */}
      <div className="recipe-section__header">
        <div className="recipe-section__title-group">
          <span className="recipe-section__eyebrow">Our Recipes</span>
          <h2 className="recipe-section__title">Popular Recipes</h2>
          <p className="recipe-section__subtitle">
            Handpicked by our chefs — fresh, delicious, and easy to make.
          </p>
        </div>
        <button className="recipe-section__view-all">
          View All Recipes
          <ArrowRightIcon />
        </button>
      </div>

      {/* Category filter tabs */}
      <div className="recipe-section__filters">
        {RECIPE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-tab ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="recipe-section__grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="recipe-section__empty">No recipes found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default RecipeSection;
