import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard/profile" replace />} />
    </Routes>
  )
}

export default App
