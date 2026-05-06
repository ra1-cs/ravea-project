import { useState } from 'react'
import { AuthContext } from './auth-context'

const API_URL = 'http://localhost:5023/api/auth'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('raveaUser')
    return savedUser ? JSON.parse(savedUser) : null
  })

  async function register(userData) {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const message = await response.text()
        return { success: false, message }
      }

      const user = await response.json()
      localStorage.setItem('raveaUser', JSON.stringify(user))
      setCurrentUser(user)

      return { success: true, message: 'Account created successfully.' }
    } catch (error) {
      console.error('Register error:', error)
      return { success: false, message: 'Server error while creating account.' }
    }
  }

  async function login(email, password) {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const message = await response.text()
        return { success: false, message }
      }

      const user = await response.json()
      localStorage.setItem('raveaUser', JSON.stringify(user))
      setCurrentUser(user)

      return { success: true, message: 'Login successful.' }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Server error while logging in.' }
    }
  }

  function logout() {
    localStorage.removeItem('raveaUser')
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}