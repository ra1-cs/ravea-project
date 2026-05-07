import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

function OrderConfirmation() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadOrder() {
      try {
        const response = await fetch(`http://localhost:5023/api/orders/${id}`)

        if (!response.ok) {
          setOrder(null)
          return
        }

        const data = await response.json()
        setOrder(data)
      } catch (error) {
        console.error('Error loading order:', error)
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [id])

  if (loading) {
    return (
      <div className="app">
        <Navbar />
        <section className="checkout-page">
          <h1>Loading confirmation...</h1>
        </section>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="app">
        <Navbar />
        <section className="checkout-page">
          <h1>Order not found</h1>
          <Link to="/products" className="primary-btn big">
            Back to Products
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />

      <section className="checkout-page">
        <motion.div
          className="checkout-card confirmation-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Order Confirmed</span>
          <h1>Thank you for your order.</h1>

          <p>
            Your order #{order.id} has been successfully placed.
          </p>

          <div className="checkout-items">
            {order.items.map((item) => (
              <div className="checkout-item" key={item.productId}>
                <img src={item.imageUrl} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <strong>${Number(item.subtotal).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>Total Paid</span>
            <strong>${Number(order.totalAmount).toFixed(2)}</strong>
          </div>

          <Link to="/products" className="primary-btn big">
            Continue Shopping
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default OrderConfirmation