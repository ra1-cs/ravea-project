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
async function forgotPassword(email) {
  try {
    const response = await fetch(`${API_URL}/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const message = await response.text()
      return { success: false, message }
    }

    const data = await response.json()

    return {
      success: true,
      message: data.message || 'A reset code has been sent to your email.',
    }
  } catch (error) {
    console.error('Forgot password error:', error)
    return { success: false, message: 'Server error while sending reset code.' }
  }
}

async function resetPassword(email, resetCode, newPassword) {
  try {
    const response = await fetch(`${API_URL}/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, resetCode, newPassword }),
    })

    if (!response.ok) {
      const message = await response.text()
      return { success: false, message }
    }

    const message = await response.text()
    return { success: true, message }
  } catch (error) {
    console.error('Reset password error:', error)
    return { success: false, message: 'Server error while resetting password.' }
  }
}
async function updateProfile(userId, profileData) {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })

    if (!response.ok) {
      const message = await response.text()
      return { success: false, message }
    }

    const updatedUser = await response.json()

    localStorage.setItem('raveaUser', JSON.stringify(updatedUser))
    setCurrentUser(updatedUser)

    return { success: true, message: 'Profile updated successfully.' }
  } catch (error) {
    console.error('Update profile error:', error)
    return { success: false, message: 'Server error while updating profile.' }
  }
}

async function deleteAccount(userId) {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      const message = await response.text()
      return { success: false, message }
    }

    localStorage.removeItem('raveaUser')
    setCurrentUser(null)

    return { success: true, message: 'Account deleted successfully.' }
  } catch (error) {
    console.error('Delete account error:', error)
    return { success: false, message: 'Server error while deleting account.' }
  }
}
  function logout() {
    localStorage.removeItem('raveaUser')
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout, forgotPassword, resetPassword, deleteAccount, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}