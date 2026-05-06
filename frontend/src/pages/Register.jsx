import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skinType: '',
    skinTone: '',
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

    const result = await register(formData)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    setMessage('Account created successfully.')

    setTimeout(() => {
      navigate('/')
    }, 1200)
  }

  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>RAVÉA Profile</span>

          <h1>Your beauty journey starts here.</h1>

          <p>
            Create your account and save your skin type, skin tone, cart,
            and future personalized recommendations.
          </p>
        </div>

        <div className="auth-card">
          <span>Create Account</span>

          <h2>Join RAVÉA</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />

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

            <select
              name="skinType"
              value={formData.skinType}
              onChange={handleChange}
              required
            >
              <option value="">Skin type</option>
              <option>Dry skin</option>
              <option>Oily skin</option>
              <option>Combination skin</option>
              <option>Sensitive skin</option>
              <option>Normal skin</option>
            </select>

            <select
              name="skinTone"
              value={formData.skinTone}
              onChange={handleChange}
              required
            >
              <option value="">Skin tone</option>
              <option>Fair</option>
              <option>Medium</option>
              <option>Olive</option>
              <option>Tan</option>
              <option>Deep</option>
            </select>

            <button
              type="submit"
              className="primary-btn big"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}
          </form>

          <p className="auth-switch">
            Already have an account?
            {' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Register