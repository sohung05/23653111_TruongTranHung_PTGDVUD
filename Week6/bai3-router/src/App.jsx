import { Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
