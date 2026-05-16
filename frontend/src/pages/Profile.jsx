import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/useAuth'

function Profile() {
  const navigate = useNavigate()
  const { currentUser, updateProfile, deleteAccount } = useAuth()

  const [showConfirm, setShowConfirm] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    skinType: currentUser?.skinType || '',
    skinTone: currentUser?.skinTone || '',
  })

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  async function handleUpdateProfile(event) {
    event.preventDefault()

    setLoading(true)
    setMessage('')

    const result = await updateProfile(currentUser.id, formData)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    setMessage('Profile updated successfully.')
  }

  async function handleDeleteAccount() {
    setLoading(true)
    setMessage('')

    const result = await deleteAccount(currentUser.id)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message)
      return
    }

    navigate('/register')
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

          <form className="profile-edit-form" onSubmit={handleUpdateProfile}>
            <div className="profile-grid">
              <div>
                <small>Email</small>
                <strong>{currentUser.email}</strong>
              </div>

              <div>
                <small>Account Status</small>
                <strong>Active</strong>
              </div>

              <div>
                <small>Full Name</small>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <small>Skin Type</small>
                <select
                  name="skinType"
                  value={formData.skinType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select skin type</option>
<option value="Dry">Dry</option>
<option value="Oily">Oily</option>
<option value="Combination">Combination</option>
<option value="Normal">Normal</option>
<option value="Sensitive">Sensitive</option>
<option value="Mature">Mature</option>
                </select>
              </div>

              <div>
                <small>Skin Tone</small>
                <select
                  name="skinTone"
                  value={formData.skinTone}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select skin tone</option>
<option value="Light">Light</option>
<option value="Medium">Medium</option>
<option value="Tan">Tan</option>
<option value="Deep">Deep</option>
<option value="Fair">Fair</option>
                </select>
              </div>
            </div>

            {message && <p className="auth-message">{message}</p>}

            <div className="profile-actions">
              <button type="submit" className="primary-btn big" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>

              <Link to="/recommendations" className="outline-btn big">
                View Recommendations
              </Link>

              <button
                type="button"
                className="danger-btn big"
                onClick={() => setShowConfirm(true)}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </section>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <span>Delete Account</span>

            <h2>Are you sure?</h2>

            <p>
              This action will permanently delete your RAVÉA account and your saved ratings.
              You cannot undo this action.
            </p>

            <div className="modal-actions">
              <button
                type="button"
                className="outline-btn big"
                onClick={() => setShowConfirm(false)}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="button"
                className="danger-btn big"
                onClick={handleDeleteAccount}
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile