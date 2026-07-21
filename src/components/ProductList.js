import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProductList = ({ products }) => {
  return (
    <div>
      <Navbar />
      <h1>Mobile Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} style={{ margin: '10px 0' }}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;