import Navbar from '../components/Navbar'

function Recommendations() {
  return (
    <div className="app">
      <Navbar />
      <section className="auth-page">
        <div className="auth-visual">
          <span>Coming Next</span>
          <h1>Your personalized product match.</h1>
          <p>
            This module will recommend makeup and skincare based on the user’s skin type and skin tone.
          </p>
        </div>

        <div className="auth-card">
          <span>Beauty Profile</span>
          <h2>Find your match</h2>

          <form className="auth-form">
            <select defaultValue="">
              <option value="" disabled>Choose skin type</option>
              <option>Dry skin</option>
              <option>Oily skin</option>
              <option>Combination skin</option>
              <option>Sensitive skin</option>
              <option>Normal skin</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>Choose skin tone</option>
              <option>Fair</option>
              <option>Medium</option>
              <option>Olive</option>
              <option>Tan</option>
              <option>Deep</option>
            </select>

            <button type="button" className="primary-btn big">
              Generate Recommendations
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Recommendations