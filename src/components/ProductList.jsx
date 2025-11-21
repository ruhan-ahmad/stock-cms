import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productAPI";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
    fetchProducts();
  }, []);

  if (loading)
    return <div className="text-center py-8 text-lg font-semibold">Loading...</div>;

  if (error)
    return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product) => (
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
