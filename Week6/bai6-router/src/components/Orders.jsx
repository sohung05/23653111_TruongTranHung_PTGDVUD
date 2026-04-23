import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Orders.css'

function Orders() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const orders = [
    { id: 'ORD-001', product: 'iPhone 15 Pro', price: '$1299', status: 'Đã giao' },
    { id: 'ORD-002', product: 'MacBook Pro', price: '$2499', status: 'Đang giao' },
    { id: 'ORD-003', product: 'iPad Air', price: '$599', status: 'Đã hủy' }
  ]

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Đơn hàng của bạn</h1>
        <button onClick={handleLogout} className="logout-btn">
          Đăng xuất
        </button>
      </div>

      <div className="orders-content">
        <div className="user-info">
          <p>Xin chào, <strong>{user?.name}</strong></p>
        </div>

        <div className="orders-list">
          <h2>Lịch sử đơn hàng</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="navigation-links">
          <button onClick={() => navigate('/profile')} className="nav-btn">
            Quay lại Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Orders