import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <button onClick={handleLogout} className="logout-btn">
          Đăng xuất
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <h2>Thông tin cá nhân</h2>
          <div className="info-item">
            <label>Tên đăng nhập:</label>
            <span>{user?.username}</span>
          </div>
          <div className="info-item">
            <label>Họ tên:</label>
            <span>{user?.name}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{user?.username}@example.com</span>
          </div>
        </div>

        <div className="navigation-links">
          <button onClick={() => navigate('/orders')} className="nav-btn">
            Xem đơn hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile