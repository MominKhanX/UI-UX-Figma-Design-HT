import Link from 'next/link';
import React from 'react';

const ProductDetailPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Under Construction</h1>
        <p className="text-gray-600 text-lg">
          The Product Detail Page is currently under construction. Please come back soon to discover what exciting details this page will contain!
        </p>
        <div className="mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-200">
            <Link href="/">Go Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
