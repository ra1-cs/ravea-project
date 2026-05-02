function Toast({ message }) {
  if (!message) return null

  return (
    <div className="toast">
      <span>✓</span>
      <div>
        <strong>Added to Beauty Bag</strong>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Toast