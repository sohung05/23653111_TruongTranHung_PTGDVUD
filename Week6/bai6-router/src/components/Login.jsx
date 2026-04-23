import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (login(username, password)) {
      navigate('/profile')
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng')
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
        </form>

        <div className="login-info">
          <p><strong>Thông tin đăng nhập:</strong></p>
          <p>Tên đăng nhập: admin</p>
          <p>Mật khẩu: 123</p>
        </div>
      </div>
    </div>
  )
}

export default Login