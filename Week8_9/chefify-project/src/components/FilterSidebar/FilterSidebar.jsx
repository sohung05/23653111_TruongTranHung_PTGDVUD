import { useState } from 'react';
import rating5 from '../../assets/image/Lab_02/rating_5.png';
import rating4 from '../../assets/image/Lab_02/rating_4.png';
import rating3 from '../../assets/image/Lab_02/rating_3.png';
import rating2 from '../../assets/image/Lab_02/rating_2.png';
import rating1 from '../../assets/image/Lab_02/rating_1.png';
import './FilterSidebar.css';

const FILTER_TYPES = [
  'Pan-fried', 'Stir-fried', 'Grilled', 'Roasted',
  'Sauteed', 'Baked', 'Steamed', 'Stewed'
];

const RATINGS = [
  { id: 5, img: rating5 },
  { id: 4, img: rating4 },
  { id: 3, img: rating3 },
  { id: 2, img: rating2 },
  { id: 1, img: rating1 },
];

function FilterSidebar() {
  const [selectedTypes, setSelectedTypes] = useState(['Grilled', 'Roasted']);
  const [selectedRatings, setSelectedRatings] = useState([3, 2, 1]);

  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleRating = (id) => {
    setSelectedRatings(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  return (
    <aside className="search-sidebar">
      <div className="filter-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 4h18M3 12h18M3 20h18" />
        </svg>
        <h3>FILTERS</h3>
      </div>

      <div className="filter-section">
        <div className="filter-section__header">
          <span>Type</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
        <div className="filter-options grid-2">
          {FILTER_TYPES.map(type => (
            <label key={type} className="checkbox-label">
              <input 
                type="checkbox" 
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              <span className="checkbox-custom"></span>
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section__header">
          <span>Time</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
        <div className="time-range">
          <div className="time-labels">
            <span>30 minutes</span>
            <span>50 minutes</span>
          </div>
          <div className="slider-container">
            <div className="slider-track"></div>
            <div className="slider-handle left" style={{left: '30%'}}></div>
            <div className="slider-handle right" style={{left: '70%'}}></div>
            <div className="slider-range" style={{left: '30%', right: '30%'}}></div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section__header">
          <span>Rating</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
        <div className="filter-options">
          {RATINGS.map(r => (
            <label key={r.id} className="checkbox-label">
              <input 
                type="checkbox" 
                checked={selectedRatings.includes(r.id)}
                onChange={() => toggleRating(r.id)}
              />
              <span className="checkbox-custom"></span>
              <img src={r.img} alt={`${r.id} stars`} className="rating-img" />
            </label>
          ))}
        </div>
      </div>

      <button className="btn-apply">Apply</button>
    </aside>
  );
}

export default FilterSidebar;
