import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { motion } from 'framer-motion'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        <span className="product-category">{product.category}</span>
      </Link>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-meta">
          <span>{product.skinType}</span>
          <span>{product.skinTone}</span>
        </div>

        <div className="product-footer">
          <strong>${product.price}</strong>
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard