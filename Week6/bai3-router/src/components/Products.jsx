import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  const products = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' }
  ]

  return (
    <div className="products-container">
      <h1>Sản phẩm</h1>
      <ul className="products-list">
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
