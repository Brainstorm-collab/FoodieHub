import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import { AppProvider } from './context/AppContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Check if user was previously authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    const guestStatus = localStorage.getItem('isGuest');
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else if (guestStatus === 'true') {
      setIsGuest(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleGuestAccess = () => {
    setIsGuest(true);
    localStorage.setItem('isGuest', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsGuest(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isGuest');
  };

  const showNavbar = isAuthenticated || isGuest;

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          {showNavbar && <Navbar onLogout={handleLogout} />}
          
          <Routes>
            <Route 
              path="/" 
              element={
                !isAuthenticated && !isGuest ? (
                  <LoginPage 
                    onLogin={handleLogin} 
                    onGuestAccess={handleGuestAccess} 
                  />
                ) : (
                  <Navigate to="/home" replace />
                )
              } 
            />
            <Route 
              path="/home" 
              element={
                showNavbar ? (
                  <LandingPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/menu" 
              element={
                showNavbar ? (
                  <MenuPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/cart" 
              element={
                showNavbar ? (
                  <CartPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/wishlist" 
              element={
                showNavbar ? (
                  <WishlistPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/checkout" 
              element={
                showNavbar ? (
                  <CheckoutPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/about" 
              element={
                showNavbar ? (
                  <AboutPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/track-order" 
              element={
                showNavbar ? (
                  <OrderTrackingPage />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;