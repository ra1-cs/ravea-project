import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { motion } from 'framer-motion'

function Products() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((p) => {
    const matchCategory = filter === 'All' || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="app">
      <Navbar />

      <motion.section
        className="shop-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Luxury Beauty Collection</h1>
        <p>Explore curated premium beauty products.</p>
      </motion.section>

      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          {['All', 'Makeup', 'Skincare', 'Beauty Tools'].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="premium-products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products