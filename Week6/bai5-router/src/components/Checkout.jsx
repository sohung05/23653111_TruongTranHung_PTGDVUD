import { useNavigate } from 'react-router-dom'
import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()

  return (
    <div className="checkout-container">
      <h1>Thanh toán thành công</h1>
      <p>Cảm ơn bạn đã mua hàng!</p>
      <p>Mã đơn hàng: #ORD-2024-001</p>
      <button onClick={() => navigate('/product')}>Quay lại</button>
    </div>
  )
}

export default Checkout
