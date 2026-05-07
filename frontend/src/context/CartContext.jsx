import { useEffect, useState } from 'react'
import { CartContext } from './cart-context'
import { useAuth } from './useAuth'

const API_URL = 'http://localhost:5023/api/cart'

export function CartProvider({ children }) {
  const { currentUser } = useAuth()

  const [cartItems, setCartItems] = useState([])
  const [toastMessage, setToastMessage] = useState('')

  async function loadCart() {
    if (!currentUser?.id) {
      setCartItems([])
      return
    }

    try {
      const response = await fetch(`${API_URL}/${currentUser.id}`)

      if (!response.ok) {
        setCartItems([])
        return
      }

      const data = await response.json()

      const formattedItems = data.map((item) => ({
        cartItemId: item.id,
        id: item.product.id,
        name: item.product.name,
        description: item.product.description,
        category: item.product.category,
        skinType: item.product.skinType,
        tone: item.product.tone,
        price: item.product.price,
        imageUrl: item.product.imageUrl,
        quantity: item.quantity,
      }))

      setCartItems(formattedItems)
    } catch (error) {
      console.error('Error loading cart:', error)
      setCartItems([])
    }
  }

  useEffect(() => {
  let ignore = false

  async function fetchCart() {
    if (!currentUser?.id) {
      if (!ignore) {
        setCartItems([])
      }
      return
    }

    try {
      const response = await fetch(`${API_URL}/${currentUser.id}`)

      if (!response.ok) {
        if (!ignore) {
          setCartItems([])
        }
        return
      }

      const data = await response.json()

      const formattedItems = data.map((item) => ({
        cartItemId: item.id,
        id: item.product.id,
        name: item.product.name,
        description: item.product.description,
        category: item.product.category,
        skinType: item.product.skinType,
        tone: item.product.tone,
        price: item.product.price,
        imageUrl: item.product.imageUrl,
        quantity: item.quantity,
      }))

      if (!ignore) {
        setCartItems(formattedItems)
      }
    } catch (error) {
      console.error('Error loading cart:', error)

      if (!ignore) {
        setCartItems([])
      }
    }
  }

  fetchCart()

  return () => {
    ignore = true
  }
}, [currentUser?.id])

  function showToast(productName) {
    setToastMessage(`${productName} was added successfully.`)

    setTimeout(() => {
      setToastMessage('')
    }, 2200)
  }

  async function addToCart(product) {
    if (!currentUser?.id) {
      setToastMessage('Please login before adding products to your cart.')
      setTimeout(() => setToastMessage(''), 2200)
      return
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUser.id,
          productId: product.id,
        }),
      })

      if (!response.ok) {
        const message = await response.text()
        setToastMessage(message || 'Unable to add product to cart.')
        setTimeout(() => setToastMessage(''), 2200)
        return
      }

      await loadCart()
      showToast(product.name)
    } catch (error) {
      console.error('Error adding to cart:', error)
      setToastMessage('Something went wrong while adding product.')
      setTimeout(() => setToastMessage(''), 2200)
    }
  }

  async function increaseQuantity(productId) {
    const item = cartItems.find((cartItem) => cartItem.id === productId)

    if (!item) return

    await updateQuantity(item.cartItemId, item.quantity + 1)
  }

  async function decreaseQuantity(productId) {
    const item = cartItems.find((cartItem) => cartItem.id === productId)

    if (!item) return

    await updateQuantity(item.cartItemId, item.quantity - 1)
  }

  async function updateQuantity(cartItemId, quantity) {
    try {
      const response = await fetch(`${API_URL}/${cartItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      })

      if (!response.ok) {
        const message = await response.text()
        setToastMessage(message || 'Unable to update cart.')
        setTimeout(() => setToastMessage(''), 2200)
        return
      }

      await loadCart()
    } catch (error) {
      console.error('Error updating cart:', error)
    }
  }

  async function removeFromCart(productId) {
    const item = cartItems.find((cartItem) => cartItem.id === productId)

    if (!item) return

    try {
      const response = await fetch(`${API_URL}/${item.cartItemId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const message = await response.text()
        setToastMessage(message || 'Unable to remove product.')
        setTimeout(() => setToastMessage(''), 2200)
        return
      }

      await loadCart()
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  async function clearCart() {
    if (!currentUser?.id) {
      setCartItems([])
      return
    }

    try {
      await fetch(`${API_URL}/clear/${currentUser.id}`, {
        method: 'DELETE',
      })

      setCartItems([])
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
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
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}