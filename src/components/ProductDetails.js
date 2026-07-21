import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === String(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Navbar />

      <h1>{product.name}</h1>
      <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} style={{ width: '150px' }} />
      <p><strong>Price:</strong> {product.price} Rs</p>
      <p><strong>Desc:</strong> {product.description}</p>

      <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '15px' }}>
        Other products
      </Link>
    </div>
  );
};

export default ProductDetails;