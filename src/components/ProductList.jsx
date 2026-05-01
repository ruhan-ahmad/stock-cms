import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productAPI";

const ProductList = ({ products: productsProp }) => {
  const [products, setProducts] = useState(productsProp ?? null);
  const [loading, setLoading] = useState(productsProp === undefined);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setError("Failed to load products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch from API when products prop is not provided
    if (productsProp === undefined) {
      fetchProducts();
    }
  }, [productsProp]);

  if (loading)
    return <div className="text-center py-8 text-lg font-semibold">Loading...</div>;

  if (error)
    return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>;

  // ── Empty State (Issue #1) ────────────────────────────────────────────────
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center w-full px-4 py-10">
        <div className="flex flex-col items-center gap-4 border-2 border-dashed border-gray-500 rounded-xl p-6 sm:p-12 text-center w-full max-w-md">
          <svg
            className="w-14 h-14 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v.375c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          <h2 className="text-xl font-semibold text-gray-100">No products found</h2>

          <p className="text-sm text-gray-400">
            Your inventory is currently empty
          </p>

          <button className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200">
            <span className="text-base leading-none">+</span>
            Add Product
          </button>
        </div>
      </div>
    );
  }

  // ── Populated State ───────────────────────────────────────────────────────
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product?.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
            <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
