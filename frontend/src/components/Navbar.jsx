import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { useAuth } from '../context/useAuth'

function Navbar() {
  const { cartCount } = useCart()
  const { currentUser, logout } = useAuth()

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">R</span>
        <span className="brand-name">RAVÉA</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>

      <div className="nav-actions">
        {currentUser ? (
          <>
            <Link to="/profile" className="ghost-btn">
              Profile
            </Link>

           <div className="nav-profile-preview">
  <div className="nav-avatar">
    {currentUser.name.charAt(0).toUpperCase()}
  </div>

  <span className="nav-username">
    {currentUser.name}
  </span>
</div>

            <button type="button" className="primary-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="ghost-btn">
              Login
            </Link>

            <Link to="/register" className="primary-btn">
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar