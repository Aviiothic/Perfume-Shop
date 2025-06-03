import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-pink-600">PerfumeStore</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-pink-600">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-pink-600">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-pink-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
