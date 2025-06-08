import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/products';

export const fetchAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};
