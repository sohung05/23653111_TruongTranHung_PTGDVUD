import { useNavigate } from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail() {
  const navigate = useNavigate()

  const handleBuyClick = () => {
    navigate('/checkout')
  }

  return (
    <div className="product-detail-container">
      <h1>Chi tiết sản phẩm</h1>
      <div className="product-info">
        <h2>iPhone 15 Pro Max</h2>
        <p>Giá: $1,299.00</p>
        <p>Mô tả: Một chiếc iPhone tuyệt vời với camera Pro và chip A17 Pro.</p>
        <button onClick={handleBuyClick}>Mua hàng</button>
      </div>
    </div>
  )
}

export default ProductDetail
