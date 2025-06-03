import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/products';
import ProductCard from './ProductCard';
import axios from 'axios';



function ProductList() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchAllProducts()
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.error('Error fetching products:', err));
  // }, []);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        console.log("Fetched products:", data);  // Add this
        setProducts(data);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Featured Perfumes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
