import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Suggestion from './components/Suggestion';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider, useAuth } from './context/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        EcoLub: Sustainable Lubrication Solutions
                      </h1>
                      <p className="text-xl opacity-90 mb-8">
                        Discover eco-friendly alternatives for your industrial lubrication needs
                      </p>
                      <div className="space-x-4">
                        <a
                          href="/suggestion"
                          className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                        >
                          Find Your Alternative
                        </a>
                        <a
                          href="/login"
                          className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <About />
                <Contact />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/suggestion" element={
              <ProtectedRoute>
                <Suggestion />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;