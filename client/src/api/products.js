import axios from 'axios';

const API_BASE_URL = 'https://5000-firebase-perfumeshop-1748926666302.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/api/products';

export const fetchAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};
