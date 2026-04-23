import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import nothingImg from '../../assets/image/Lab_02/nothing.png';
import './Search.css';

const SUGGESTIONS = ['Sweet Cake', 'Black Cake', 'Pozole Verde', 'Healthy food'];

function Search() {
  return (
    <div className="search-page">
      <div className="search-page__inner">
        {/* Sidebar Filters */}
        <FilterSidebar />

        {/* Main Content */}
        <main className="search-results">
          <h2 className="no-results-title">
            Sorry, no results were found for <span>“cakescascsa”</span>
          </h2>
          
          <div className="empty-state">
            <img src={nothingImg} alt="No results found" className="empty-state__img" />
            <p className="empty-state__text">
              We have all your Independence Day sweets covered.
            </p>
            <div className="suggestion-tags">
              {SUGGESTIONS.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Search;
