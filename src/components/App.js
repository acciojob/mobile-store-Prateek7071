import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';

const initialMobiles = [
  { id: "1", name: "Samsung Galaxy S8 64GB Black", price: "16303", description: "Samsung Galaxy S23 Ultra 5G price in India starts from 1,24,999.", image: "" },
  { id: "2", name: "iPhone 13 Pro", price: "119900", description: "Super Retina XDR display with ProMotion.", image: "" },
  { id: "3", name: "OnePlus 11 5G", price: "56999", description: "Snapdragon 8 Gen 2 with Hasselblad Camera.", image: "" },
  { id: "4", name: "Google Pixel 7 Pro", price: "84999", description: "The all-pro Google phone with top-tier camera system.", image: "" },
  { id: "5", name: "Xiaomi 13 Pro", price: "79999", description: "Leica professional optical lens technology.", image: "" },
  { id: "6", name: "Nothing Phone (2)", price: "44999", description: "Unique Glyph interface look on a semi-transparent back.", image: "" },
  { id: "7", name: "Realme GT Neo 5", price: "34999", description: "Ultra-fast 240W charging speeds.", image: "" },
  { id: "8", name: "Asus ROG Phone 7", price: "74999", description: "High performance ultimate gaming engine interface.", image: "" }
];

function App() {
  const [products, setProducts] = useState(initialMobiles);

  return (
    <BrowserRouter>
      <Switch>
        {/* Product Listing Page */}
        <Route exact path="/" render={() => <ProductList products={products} />} />
        
        {/* Admin Dashboard */}
        <Route exact path="/admin" render={() => <AdminPanel products={products} setProducts={setProducts} />} />
        
        {/* Dynamic Product Detail Route */}
        <Route path="/products/:id" render={() => <ProductDetails products={products} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App; 
