function ReviewList({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review._id} className="border p-4 rounded-md shadow-sm">
          <p className="font-semibold">{review.user}</p>
          <p className="text-yellow-500">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
