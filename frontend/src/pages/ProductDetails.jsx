import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/useCart'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [ratingMessage, setRatingMessage] = useState('')

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true)

        const storedUser = JSON.parse(localStorage.getItem('raveaUser'))
        const userQuery = storedUser?.id ? `?userId=${storedUser.id}` : ''

        const productResponse = await fetch(`http://localhost:5023/api/products/${id}${userQuery}`)
        const productData = await productResponse.json()

        const productsResponse = await fetch('http://localhost:5023/api/products')
        const allProducts = await productsResponse.json()

        setProduct(productData)
        setSelectedRating(productData.userRating || 0)

        setRelatedProducts(
          allProducts
            .filter((item) => item.category === productData.category && item.id !== productData.id)
            .slice(0, 3)
        )
      } catch (error) {
        console.error('Error loading product details:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  async function handleRating(value) {
    setRatingMessage('')

    const storedUser = JSON.parse(localStorage.getItem('raveaUser'))

    if (!storedUser || !storedUser.id) {
      setRatingMessage('Please create an account or login before rating this product.')
      return
    }

    try {
      const response = await fetch(`http://localhost:5023/api/products/${id}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ratingValue: value,
          userId: storedUser.id,
        }),
      })

      if (!response.ok) {
        const errorMessage = await response.text()
        setRatingMessage(errorMessage || 'Unable to save your rating.')
        return
      }

      const result = await response.json()

      setSelectedRating(result.userRating || value)
      setRatingMessage('Thank you! Your rating has been saved.')

      const productResponse = await fetch(
        `http://localhost:5023/api/products/${id}?userId=${storedUser.id}`
      )
      const updatedProduct = await productResponse.json()
      setProduct(updatedProduct)
    } catch (error) {
      console.error('Error submitting rating:', error)
      setRatingMessage('Something went wrong while saving your rating.')
    }
  }

  if (loading) {
    return (
      <div className="app">
        <Navbar />
        <section className="details-page">
          <div className="details-content">
            <h1>Loading product...</h1>
          </div>
        </section>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="app">
        <Navbar />
        <section className="details-page">
          <div className="details-content">
            <span>Not Found</span>
            <h1>Product not found</h1>
            <Link to="/products" className="primary-btn big">Back to Products</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />

      <motion.section
        className="details-page"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="details-image"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={product.imageUrl || product.image} alt={product.name} />

          <div className="rating-box">
            <div className="rating-summary">
              <span className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= Math.round(product.averageRating || 0) ? 'star active' : 'star'}
                  >
                    ★
                  </span>
                ))}
              </span>

              <strong>
                {product.ratingCount > 0
                  ? `${Number(product.averageRating).toFixed(1)} / 5 (${product.ratingCount} ratings)`
                  : 'No ratings yet'}
              </strong>
            </div>

            <div className="user-rating">
              <small>Rate this product</small>

              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={star <= (hoverRating || selectedRating) ? 'star-button active' : 'star-button'}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                ))}
              </div>

              {ratingMessage && <p className="rating-message">{ratingMessage}</p>}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="details-content"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <div className="details-tags">
            <div>
              <small>Best for</small>
              <strong>{product.skinType}</strong>
            </div>
            <div>
              <small>Skin tone</small>
              <strong>{product.tone || product.skinTone}</strong>
            </div>
            <div>
              <small>Collection</small>
              <strong>RAVÉA Signature</strong>
            </div>
            <div>
              <small>Experience</small>
              <strong>Premium daily routine</strong>
            </div>
          </div>

          <div className="details-price">${product.price}</div>

          <div className="details-actions">
            <button className="primary-btn big" onClick={() => addToCart(product)}>
              Add to Beauty Bag
            </button>
            <Link to="/products" className="outline-btn big">
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <section className="related-section">
        <div className="section-header">
          <span>Complete the ritual</span>
          <h2>You may also love</h2>
        </div>

        <div className="premium-products-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails