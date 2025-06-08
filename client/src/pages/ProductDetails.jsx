import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/products";
import { fetchReviewsByProductId } from "../api/reviews";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import ShareButton from "../components/ShareButton";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.images[0]);
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
        setProduct(null);
      });

    fetchReviewsByProductId(id)
      .then((fetchedReviews) => {
        setReviews(fetchedReviews);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews", err);
      });
  }, [id]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold text-red-500">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* LEFT: IMAGE GALLERY */}
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover rounded-xl shadow-md"
        />

        <div className="flex gap-4 mt-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition hover:scale-105 ${selectedImage === img ? "border-pink-500" : "border-transparent"
                }`}
            />
          ))}
        </div>

      </div>

      {/* RIGHT: PRODUCT INFO */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-pink-600 text-xl font-semibold mt-4">₹{product.price}</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Size:</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {product.sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <button className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
          Add to Cart
        </button>
        <ShareButton product={product} />
      </div>

      {/* BELOW: REVIEWS */}
      <div className="md:col-span-2 mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <ReviewList reviews={reviews} />
        <ReviewForm onAddReview={handleAddReview} />
      </div>
    </div>
  );
}

export default ProductDetails;
