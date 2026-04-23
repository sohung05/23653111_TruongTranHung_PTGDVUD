import { useParams, Link } from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="product-detail-container">
      <h1>Chi tiết sản phẩm</h1>
      <p className="product-id">Product ID: {id}</p>
      <Link to="/products" className="back-link">Quay lại danh sách</Link>
    </div>
  )
}

export default ProductDetail
