import { Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
