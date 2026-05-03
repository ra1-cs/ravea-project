import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { useCart } from './context/useCart'
import Toast from './components/Toast'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/login'
import Register from './pages/Register'
import Recommendations from './pages/Recommendations'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

function AppContent() {
  const { toastMessage } = useCart()

  return (
    <>
      <Toast message={toastMessage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </>
  )
}

export default App