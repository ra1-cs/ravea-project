import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function ResetPassword() {
  const navigate = useNavigate()
  const { resetPassword } = useAuth()

  const [formData, setFormData] = useState({
    email: localStorage.getItem('raveaResetEmail') || '',
    resetCode: '',
    newPassword: '',
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

    const result = await resetPassword(
      formData.email,
      formData.resetCode,
      formData.newPassword
    )

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    localStorage.removeItem('raveaResetEmail')
    localStorage.removeItem('raveaResetCode')

    setMessage('Password updated successfully. You can login now.')

    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>Secure Reset</span>

          <h1>Create a new password.</h1>

          <p>
            Enter the verification code and choose a new password for your
            RAVÉA account.
          </p>
        </div>

        <div className="auth-card">
          <span>Reset Password</span>

          <h2>New Password</h2>

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
              type="text"
              name="resetCode"
              placeholder="Verification code"
              required
              value={formData.resetCode}
              onChange={handleChange}
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              required
              value={formData.newPassword}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="primary-btn big"
              disabled={loading}
            >
              {loading ? 'Updating password...' : 'Reset Password'}
            </button>

            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}
          </form>

          <p className="auth-switch">
            Back to
            {' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ResetPassword