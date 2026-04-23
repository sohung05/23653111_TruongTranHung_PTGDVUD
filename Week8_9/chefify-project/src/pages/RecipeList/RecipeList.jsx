import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import cucumberSalad from '../../assets/image/Lab_03/cucumber_salad_charry_tomatoes.png';
import italianTomato from '../../assets/image/Lab_03/italian_style_tomato_salad.png';
import potatoSalad from '../../assets/image/Lab_03/Potato Salad.png';
import cabbageShrimp from '../../assets/image/Lab_03/salad_with_cabbage_and_shrimp.png';
import fiveColor from '../../assets/image/Lab_03/five_color_salad.png';
import cornSalad from '../../assets/image/Lab_03/corn_salad.png';
import lotusDelight from '../../assets/image/Lab_03/lotus_delight_salad.png';
import avocadoSalad from '../../assets/image/Lab_03/avacador_salad.png';
import './RecipeList.css';

const SALAD_RECIPES = [
  { id: 1, title: 'Cucumber salad, cherry tomatoes', time: '32 minutes', image: cucumberSalad },
  { id: 2, title: 'Italian-style tomato salad', time: '32 minutes', image: italianTomato },
  { id: 3, title: 'Potato Salad', time: '32 minutes', image: potatoSalad },
  { id: 4, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: cabbageShrimp },
  { id: 5, title: 'Five-color salad', time: '32 minutes', image: fiveColor },
  { id: 6, title: 'Corn Salad', time: '32 minutes', image: cornSalad },
  { id: 7, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: cabbageShrimp },
  { id: 8, title: 'Lotus delight salad', time: '32 minutes', image: lotusDelight },
  { id: 9, title: 'Avocado Salad', time: '32 minutes', image: avocadoSalad },
];

function RecipeList() {
  return (
    <div className="recipe-list-page">
      <div className="recipe-list-page__inner">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <main className="recipe-list-content">
          <div className="recipe-list-header">
            <h1 className="recipe-list-title">Salad (32)</h1>
            <div className="recipe-list-sort">
              <select className="sort-select">
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="recipe-grid">
            {SALAD_RECIPES.map(recipe => (
              <div key={recipe.id} className="recipe-box-card">
                <div className="recipe-box-card__image">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="recipe-box-card__body">
                  <div className="recipe-box-card__header">
                    <h3 className="recipe-box-card__title">{recipe.title}</h3>
                    <button className="btn-bookmark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <button className="pagination__arrow">
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
            <button className="pagination__arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RecipeList;
