import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function Products() {
  const productsRef = useRef(null)

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const categoryFromUrl = query.get('category')

  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(categoryFromUrl || 'All')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const [sortOption, setSortOption] = useState('default')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  function scrollToProducts() {
    setTimeout(() => {
      productsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
  }

  useEffect(() => {
    fetch('http://localhost:5023/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading products:', error)
        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter((p) => {
    const matchCategory = filter === 'All' || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price
    if (sortOption === 'price-high') return b.price - a.price
    if (sortOption === 'rating-high') {
      return (b.averageRating || 0) - (a.averageRating || 0)
    }
    return 0
  })

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage

  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  )

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
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
            scrollToProducts()
          }}
        />

        <div className="sort-group">
          <span>Sort by</span>

          <button
            className={sortOption === 'default' ? 'active' : ''}
            onClick={() => {
              setSortOption('default')
              setCurrentPage(1)
              scrollToProducts()
            }}
          >
            Default
          </button>

          <button
            className={sortOption === 'price-low' ? 'active' : ''}
            onClick={() => {
              setSortOption('price-low')
              setCurrentPage(1)
              scrollToProducts()
            }}
          >
            Price ↑
          </button>

          <button
            className={sortOption === 'price-high' ? 'active' : ''}
            onClick={() => {
              setSortOption('price-high')
              setCurrentPage(1)
              scrollToProducts()
            }}
          >
            Price ↓
          </button>

          <button
            className={sortOption === 'rating-high' ? 'active' : ''}
            onClick={() => {
              setSortOption('rating-high')
              setCurrentPage(1)
              scrollToProducts()
            }}
          >
            Top Rated
          </button>
        </div>

        <div className="filters">
          {['All', 'Makeup', 'Skincare', 'Tools'].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => {
                setFilter(cat)
                setCurrentPage(1)
                scrollToProducts()
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div ref={productsRef}>
        {loading ? (
          <p className="loading-products">Loading products...</p>
        ) : (
          <>
            <div className="premium-products-grid">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1)
                    scrollToProducts()
                  }}
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(currentPage + 1)
                    scrollToProducts()
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Products