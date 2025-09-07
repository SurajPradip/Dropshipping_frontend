import { useEffect, useState } from 'react';
import { api } from '../../api_helper';
import "../../index.css";
import coverImage from "../../assets/cover.jpg";

export default function FirstPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(api.core('/list-products/'))
      .then(r => r.json())
      .then(d => {
        if (d.status) {
          setProducts(d.response);
          setFiltered(d.response);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      
      <img
        src={coverImage}
        alt="Cover"
        className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
      />
      <h1 className="text-3xl font-bold  text-gray-800 mb-8">Our Best Sellers</h1>
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {filtered.map((product, i) => (
          <div
            key={i}
            className="bg-white border hover:cursor-pointer border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-base font-semibold text-gray-800 line-clamp-2">{product.name}</h2>
            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
              <span className="text-xs text-gray-500">{product.stock} left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
