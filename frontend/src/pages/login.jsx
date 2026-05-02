import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function login() {
  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>Welcome Back</span>
          <h1>Continue your personalized beauty experience.</h1>
          <p>
            Login to manage your cart, view your profile, and receive beauty recommendations made for your skin.
          </p>
        </div>

        <div className="auth-card">
          <span>Login</span>
          <h2>Access RAVÉA</h2>

          <form className="auth-form">
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />

            <button type="button" className="primary-btn big">
              Login
            </button>
          </form>

          <p className="auth-switch">
            New to RAVÉA? <Link to="/register">Create account</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default login