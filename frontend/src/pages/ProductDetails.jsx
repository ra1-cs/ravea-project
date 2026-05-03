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

  useEffect(() => {
    async function loadProduct() {
      try {
        const productResponse = await fetch(`http://localhost:5023/api/products/${id}`)
        const productData = await productResponse.json()

        const productsResponse = await fetch('http://localhost:5023/api/products')
        const allProducts = await productsResponse.json()

        setProduct(productData)
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