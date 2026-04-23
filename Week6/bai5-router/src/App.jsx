import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProductDetail from './components/ProductDetail'
import Checkout from './components/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
