import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import RecipeBox from './pages/RecipeBox/RecipeBox';
import RecipeList from './pages/RecipeList/RecipeList';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes" element={<RecipeBox />} />
        <Route path="/category/salad" element={<RecipeList />} />
      </Routes>
      <Footer />

      {/* Global modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
