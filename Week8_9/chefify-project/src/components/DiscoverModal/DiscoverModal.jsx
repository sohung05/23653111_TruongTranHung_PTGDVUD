import { useState, useEffect, useCallback } from 'react';
import slide1 from '../../assets/image/Lab_01/Image 93.png';
import slide2 from '../../assets/image/Lab_01/Image 73.png';
import slide3 from '../../assets/image/Lab_01/Image 72.png';
import './DiscoverModal.css';

const SLIDES = [
  {
    id: 1,
    image: slide1,
    alt: 'Discover delicious recipes on Chefify',
  },
  {
    id: 2,
    image: slide2,
    alt: 'Step-by-step cooking guides',
  },
  {
    id: 3,
    image: slide3,
    alt: 'Join the Chefify community',
  },
];

const STORAGE_KEY = 'chefify_discover_seen';

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

function DiscoverModal() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Show modal only once per session (or if not seen before)
  useEffect(() => {
    const hasSeen = sessionStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      // Small delay so page renders first
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  }, []);

  const handleNext = useCallback(() => {
    if (activeIndex < SLIDES.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      handleClose();
    }
  }, [activeIndex, handleClose]);

  const handleDot = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Close on backdrop click
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose]
  );

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (visible) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, handleClose]);

  if (!visible) return null;

  const isLastSlide = activeIndex === SLIDES.length - 1;

  return (
    <div
      className="discover-modal__backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Discover Chefify"
    >
      <div className="discover-modal">
        {/* Close button */}
        <button
          className="discover-modal__close"
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        {/* Title */}
        <h2 className="discover-modal__title">Discover Chefify</h2>
        <p className="discover-modal__subtitle">
          Easy and delicious cooking instructions right here.
          Start exploring now!
        </p>

        {/* Carousel image */}
        <div className="discover-modal__carousel">
          <img
            key={activeIndex}
            src={SLIDES[activeIndex].image}
            alt={SLIDES[activeIndex].alt}
            className="discover-modal__carousel-img"
          />
        </div>

        {/* Dots */}
        <div className="discover-modal__dots" role="tablist">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              className={`discover-modal__dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDot(index)}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === activeIndex}
            />
          ))}
        </div>

        {/* Next / Get Started */}
        <button className="discover-modal__next" onClick={handleNext}>
          {isLastSlide ? 'Get Started' : 'Next'}
        </button>

        {/* Skip */}
        <button className="discover-modal__skip" onClick={handleClose}>
          Skip
        </button>
      </div>
    </div>
  );
}

export default DiscoverModal;
