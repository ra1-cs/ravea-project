import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useCart } from '../context/useCart'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((item) => item.id === Number(id))

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

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

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
          <img src={product.image} alt={product.name} />
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
              <strong>{product.skinTone}</strong>
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