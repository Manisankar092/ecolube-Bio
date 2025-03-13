import React from 'react';
import { Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EcoLub</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
            {isAuthenticated ? (
              <>
                <Link to="/suggestion" className="text-gray-600 hover:text-green-600">Get Suggestion</Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-green-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
            )}
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}