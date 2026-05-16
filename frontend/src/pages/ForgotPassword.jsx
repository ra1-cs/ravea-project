import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function ForgotPassword() {
  const navigate = useNavigate()
  const { forgotPassword } = useAuth()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setMessage('')

    const result = await forgotPassword(email)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    localStorage.setItem('raveaResetEmail', email)
    localStorage.removeItem('raveaResetCode')

    setMessage('A reset code has been sent to your email.')

    setTimeout(() => {
      navigate('/reset-password')
    }, 1500)
  }

  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>Password Recovery</span>

          <h1>Recover your RAVÉA account.</h1>

          <p>
            Enter your email address and we will send a verification code
            to help you reset your password securely.
          </p>
        </div>

        <div className="auth-card">
          <span>Forgot Password</span>

          <h2>Get Reset Code</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              className="primary-btn big"
              disabled={loading}
            >
              {loading ? 'Sending code...' : 'Send Reset Code'}
            </button>

            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}
          </form>

          <p className="auth-switch">
            Remember your password? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword