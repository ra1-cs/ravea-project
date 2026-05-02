import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  const heroProducts = products.slice(0, 3)
  const featuredProducts = products.slice(4, 10)

  return (
    <div className="home-luxury">
      <Navbar />

      <section className="editorial-hero">
        <div className="editorial-left">
          <span className="luxury-kicker">RAVÉA BEAUTY HOUSE</span>
          <h1>Where skincare intelligence meets luxury beauty.</h1>
          <p>
            A premium e-commerce experience for makeup, skincare, and beauty tools,
            personalized by skin type and skin tone.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn big">Enter The Collection</Link>
            <Link to="/recommendations" className="champagne-btn">Find My Match</Link>
          </div>
        </div>

        <div className="editorial-gallery">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" />
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80" />
          <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80" />
        </div>
      </section>

      <section className="signature-strip">
        <div>
          <strong>48+</strong>
          <span>Curated Products</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Beauty Categories</span>
        </div>
        <div>
          <strong>Skin-first</strong>
          <span>Recommendations</span>
        </div>
      </section>

      <section className="collection-panels">
        <Link to="/products" className="panel makeup-panel">
          <span>Makeup</span>
          <h2>Color that speaks luxury.</h2>
        </Link>

        <Link to="/products" className="panel skincare-panel">
          <span>Skincare</span>
          <h2>Care designed around your skin.</h2>
        </Link>

        <Link to="/products" className="panel tools-panel">
          <span>Tools</span>
          <h2>Rituals made refined.</h2>
        </Link>
      </section>

      <section className="spotlight-section">
        <div className="spotlight-copy">
          <span>Editor’s Ritual</span>
          <h2>Build your glow routine with intelligent product matching.</h2>
          <p>
            RAVÉA connects browsing, product details, cart management, and future
            recommendations into a single elegant user journey.
          </p>
        </div>

        <div className="spotlight-products">
          {heroProducts.map((product) => (
            <div className="mini-product" key={product.id}>
              <img src={product.image} />
              <div>
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <strong>${product.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section home-products">
        <div className="section-header">
          <span>Luxury Selection</span>
          <h2>Featured beauty pieces</h2>
          <p>A small preview from the full RAVÉA collection.</p>
        </div>

        <div className="premium-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="center-action">
          <Link to="/products" className="outline-btn big">View All 48 Products</Link>
        </div>
      </section>
    </div>
  )
}

export default Home