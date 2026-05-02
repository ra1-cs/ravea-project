import { useState } from 'react'
import { CartContext } from './cart-context'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [toastMessage, setToastMessage] = useState('')

  function showToast(productName) {
    setToastMessage(`${productName} was added successfully.`)

    setTimeout(() => {
      setToastMessage('')
    }, 2200)
  }

  function addToCart(product) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...items, { ...product, quantity: 1 }]
    })

    showToast(product.name)
  }

  function increaseQuantity(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decreaseQuantity(id) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        toastMessage,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}