import { useState } from 'react'
import ProductFilter from './components/ProductFilter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductFilter />
    </>
  )
}

export default App
