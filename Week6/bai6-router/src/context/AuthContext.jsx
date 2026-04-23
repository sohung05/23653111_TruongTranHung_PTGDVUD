import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (username, password) => {
    // Simple mock authentication
    if (username === 'admin' && password === '123') {
      setUser({ username, name: 'Nguyễn Văn A' })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}