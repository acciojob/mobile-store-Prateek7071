import React, { useState } from 'react';
import Navbar from './Navbar';

const AdminPanel = ({ products, setProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [editPrices, setEditPrices] = useState({});

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: String(Date.now()),
      name,
      price,
      description,
      image
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  const handleUpdatePrice = (id) => {
    const updatedPrice = editPrices[id];
    if (!updatedPrice) return;

    setProducts(products.map(p => p.id === id ? { ...p, price: updatedPrice } : p));
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Navbar />

      <h2>Admin Panel</h2>

      <form onSubmit={handleAddProduct} style={{ marginBottom: '30px', maxWidth: '400px' }}>
        <h3>Add New Product</h3>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
        <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="form-control" />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
        <button type="submit" className="btn">Add Product</button>
      </form>


      <h3>Manage Products ({products.length})</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <span>{product.name} - {product.price} Rs</span>
            
            <div style={{ marginTop: '5px' }}>
              <input 
                type="text" 
                placeholder="New Price" 
                value={editPrices[product.id] || ''} 
                onChange={e => setEditPrices({ ...editPrices, [product.id]: e.target.value })}
                className="form-control"
                style={{ width: '100px', marginRight: '10px', display: 'inline-block' }}
              />

              <span>
                <button onClick={() => handleDeleteProduct(product.id)} className="float-right btn">
                  Delete
                </button>
              </span>

              <span>
                <button onClick={() => handleUpdatePrice(product.id)} className="float-right btn">
                  Save Changes
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;