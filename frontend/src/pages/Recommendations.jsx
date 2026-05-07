import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

function Recommendations() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRecommendations() {
      try {
        const storedUser = JSON.parse(localStorage.getItem('raveaUser'))

        if (!storedUser?.id) {
          setLoading(false)
          return
        }

        const response = await fetch(
          `http://localhost:5023/api/recommendations/${storedUser.id}`
        )

        if (!response.ok) {
          setProducts([])
          return
        }

        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error loading recommendations:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRecommendations()
  }, [])

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="app">
      <Navbar />

      <section className="shop-hero">
        <span>Personalized Beauty</span>
        <h1>Recommended for your skin profile</h1>
        <p>
          Discover products selected based on your skin type and skin tone.
        </p>
      </section>

      <section className="shop-section">
        <div className="filter-pills recommendation-tabs">
          {['All', 'Makeup', 'Skincare', 'Tools'].map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="empty-cart">
            <h2>Loading recommendations...</h2>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="empty-cart">
            <h2>No recommendations found</h2>
            <p>
              Update your skin type and skin tone in your profile to improve your recommendations.
            </p>
          </div>
        ) : (
          <div className="premium-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Recommendations