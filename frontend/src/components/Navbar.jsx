import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

function Navbar() {
  const { cartCount } = useCart()

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
        <Link to="/login" className="ghost-btn">Login</Link>
        <Link to="/register" className="primary-btn">Create Account</Link>
      </div>
    </nav>
  )
}

export default Navbar