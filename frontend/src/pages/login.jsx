import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setMessage('')

    const result = await login(formData.email, formData.password)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    setMessage('Login successful.')

    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>Welcome Back</span>

          <h1>Continue your personalized beauty experience.</h1>

          <p>
            Login to manage your cart, view your profile, and receive beauty
            recommendations made for your skin.
          </p>
        </div>

        <div className="auth-card">
          <span>Login</span>

          <h2>Access RAVÉA</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="primary-btn big"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <Link to="/forgot-password" className="forgot-password-link">
  Forgot password?
</Link>

            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}
          </form>

          <p className="auth-switch">
            New to RAVÉA?
            {' '}
            <Link to="/register">Create account</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Login