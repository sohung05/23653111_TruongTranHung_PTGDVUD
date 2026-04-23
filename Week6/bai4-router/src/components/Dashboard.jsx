import { Outlet, Link, useLocation } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const location = useLocation()

  const isActive = (path) => location.pathname === `/dashboard/${path}`

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-menu">
          <nav>
            <Link
              to="/dashboard/profile"
              className={`menu-item ${isActive('profile') ? 'active' : ''}`}
            >
              Profile
            </Link>
            <Link
              to="/dashboard/orders"
              className={`menu-item ${isActive('orders') ? 'active' : ''}`}
            >
              Orders
            </Link>
            <Link
              to="/dashboard/settings"
              className={`menu-item ${isActive('settings') ? 'active' : ''}`}
            >
              Settings
            </Link>
          </nav>
        </aside>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
