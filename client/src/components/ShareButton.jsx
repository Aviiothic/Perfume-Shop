import React from 'react';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaShareAlt,
} from 'react-icons/fa';

const ShareButton = ({ product }) => {
  const shareData = {
    title: product.name,
    text: `${product.name} - ${product.shortDescription}`,
    url: window.location.href,
  };

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('Web Share API is not supported on this browser.');
      }
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Share this product:</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <FaShareAlt /> Share
        </button>

        <a
          href={`https://wa.me/?text=Check out this perfume: ${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <FaFacebook /> Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=Check out this perfume!&url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          <FaTwitter /> Twitter
        </a>
      </div>
    </div>
  );
};

export default ShareButton;
