import { useState } from 'react'
import { AuthContext } from './auth-context'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('ravea_user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  function register(userData) {
    const users = JSON.parse(localStorage.getItem('ravea_users')) || []

    const existingUser = users.find((user) => user.email === userData.email)

    if (existingUser) {
      return { success: false, message: 'Email already exists.' }
    }

    const newUser = {
      id: Date.now(),
      ...userData,
    }

    users.push(newUser)
    localStorage.setItem('ravea_users', JSON.stringify(users))
    localStorage.setItem('ravea_user', JSON.stringify(newUser))
    setCurrentUser(newUser)

    return { success: true, message: 'Account created successfully.' }
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('ravea_users')) || []

    const user = users.find(
      (item) => item.email === email && item.password === password
    )

    if (!user) {
      return { success: false, message: 'Invalid email or password.' }
    }

    localStorage.setItem('ravea_user', JSON.stringify(user))
    setCurrentUser(user)

    return { success: true, message: 'Login successful.' }
  }

  function logout() {
    localStorage.removeItem('ravea_user')
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}