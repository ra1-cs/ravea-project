import { Link, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function Profile() {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="app">
      <Navbar />

      <section className="profile-page">
        <div className="profile-card">
          <div className="profile-avatar-large">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>

          <span>RAVÉA Profile</span>

          <h1>{currentUser.name}</h1>

          <p>
            Manage your beauty profile and keep your recommendations personalized.
          </p>

          <div className="profile-grid">
            <div>
              <small>Email</small>
              <strong>{currentUser.email}</strong>
            </div>

            <div>
              <small>Skin Type</small>
              <strong>{currentUser.skinType || 'Not selected'}</strong>
            </div>

            <div>
              <small>Skin Tone</small>
              <strong>{currentUser.skinTone || 'Not selected'}</strong>
            </div>

            <div>
              <small>Account Status</small>
              <strong>Active</strong>
            </div>
          </div>

          <div className="profile-actions">
            <Link to="/recommendations" className="primary-btn big">
              View Recommendations
            </Link>

            <Link to="/products" className="outline-btn big">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile