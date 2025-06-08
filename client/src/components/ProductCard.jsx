import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-full">
        <div className="w-full h-64 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-sm flex-grow">{product.shortDescription}</p>
          <p className="mt-2 text-pink-600 font-semibold">₹{product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
