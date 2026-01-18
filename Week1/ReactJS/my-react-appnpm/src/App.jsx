import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './component/ProductCard'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <h1>Danh sách sản phẩm</h1>

      <div className="product-list">
        <ProductCard />
      </div>
    </div>
    <div style={{ padding: "40px", display: "flex", gap: "10px" }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
    </>
  )
}

export default App
