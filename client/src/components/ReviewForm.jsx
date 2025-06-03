import { useState } from 'react';

function ReviewForm({ onAddReview }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name,
      rating: parseInt(rating),
      comment,
    };
    onAddReview(newReview);
    setName('');
    setRating(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">Add a Review</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full border p-2 rounded"
      >
        {[5, 4, 3, 2, 1].map((star) => (
          <option key={star} value={star}>{star} Stars</option>
        ))}
      </select>
      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-2 rounded"
        required
      ></textarea>
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
