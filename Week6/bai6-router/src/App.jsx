import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Orders from './components/Orders'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/profile" replace />} />

      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />

      <Route path="/orders" element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
