import { useState } from "react";
import { useParams } from "react-router-dom";
import { postReview } from "../api/reviews";

function ReviewForm({ onAddReview }) {
  const { id: productId } = useParams();
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { productId, user, rating, comment };
    try {
      const saved = await postReview(newReview);
      onAddReview(saved);
      setUser("");
      setRating(5);
      setComment("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Your name"
        required
        className="border p-2 w-full rounded"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 w-full rounded"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your review"
        required
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
