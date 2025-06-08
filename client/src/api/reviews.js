import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews';

export const fetchReviewsByProductId = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

export const postReview = async (review) => {
  const response = await axios.post(API_URL, review);
  return response.data;
};
