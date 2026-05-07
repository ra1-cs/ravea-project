import { Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'
import { useCart } from '../context/useCart'

function Checkout() {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { cartItems, cartTotal, clearCart } = useCart()

  async function handlePlaceOrder() {
    try {
      const response = await fetch('http://localhost:5023/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUser.id,
        }),
      })

      if (!response.ok) {
        const message = await response.text()
        alert(message)
        return
      }

      const order = await response.json()

      await clearCart()

      navigate(`/order-confirmation/${order.id}`)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong while placing your order.')
    }
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />
  }

  return (
    <div className="app">
      <Navbar />

      <section className="checkout-page">
        <motion.div
          className="checkout-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Checkout</span>
          <h1>Review your order</h1>
          <p>Confirm your RAVÉA beauty bag before placing your order.</p>

          <div className="checkout-items">
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={item.imageUrl || item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <div className="checkout-actions">
            <Link to="/cart" className="outline-btn big">
              Back to Cart
            </Link>

            <button
              type="button"
              className="primary-btn big"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Checkout