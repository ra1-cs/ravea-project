import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Register() {
  return (
    <div className="app">
      <Navbar />

      <section className="auth-page">
        <div className="auth-visual">
          <span>RAVÉA Profile</span>
          <h1>Your beauty journey starts here.</h1>
          <p>
            Create your account and save your skin type, skin tone, cart, and future personalized recommendations.
          </p>
        </div>

        <div className="auth-card">
          <span>Create Account</span>
          <h2>Join RAVÉA</h2>

          <form className="auth-form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />

            <select defaultValue="">
              <option value="" disabled>Skin type</option>
              <option>Dry skin</option>
              <option>Oily skin</option>
              <option>Combination skin</option>
              <option>Sensitive skin</option>
              <option>Normal skin</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>Skin tone</option>
              <option>Fair</option>
              <option>Medium</option>
              <option>Olive</option>
              <option>Tan</option>
              <option>Deep</option>
            </select>

            <button type="button" className="primary-btn big">
              Create Account
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Register