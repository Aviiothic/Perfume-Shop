import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-300 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Discover Our New Fragrances</h1>
      <p className="text-lg text-gray-600 mb-6">Indulge in luxury with our latest perfume collections</p>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default Banner;
