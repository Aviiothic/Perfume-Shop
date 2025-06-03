import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="mt-2 text-pink-600 font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
