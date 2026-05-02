import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useCart } from '../context/useCart'

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  return (
    <div className="app">
      <Navbar />

      <section className="cart-page">
        <motion.div
          className="cart-header"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Shopping Bag</span>
          <h1>Your RAVÉA beauty bag</h1>
          <p>Review your selected products before checkout.</p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            className="empty-cart"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2>Your beauty bag is empty</h2>
            <p>Add your favorite products to see them here.</p>
          </motion.div>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <motion.div
                  className="cart-item"
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>

                  <div className="cart-price">
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="cart-summary"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span>Order Summary</span>
              <h2>${cartTotal.toFixed(2)}</h2>
              <p>Taxes and shipping are calculated at checkout.</p>
              <button className="primary-btn big">Continue to Checkout</button>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Cart