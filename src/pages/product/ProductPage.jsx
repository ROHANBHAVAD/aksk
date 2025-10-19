import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductPage.css';

const products = [
  {
    name: 'Organic Compost',
    price: '₹250',
    description: 'Natural compost for healthy soil and sustainable farming.',
    benefits: ['Improves soil health', 'Eco-friendly', 'Boosts crop yield'],
    icon: '🪱'
  },
  {
    name: 'Urea Fertilizer',
    price: '₹180',
    description: 'High-nitrogen fertilizer for rapid crop growth.',
    benefits: ['Fast growth', 'High nitrogen content', 'Widely used'],
    icon: '🌾'
  },
  {
    name: 'NPK 20-20-20',
    price: '₹320',
    description: 'Balanced nutrients for all types of crops.',
    benefits: ['Balanced nutrition', 'Versatile use', 'Improves yield'],
    icon: '🧪'
  },
  {
    name: 'Soil Conditioner',
    price: '₹200',
    description: 'Improves soil structure and water retention.',
    benefits: ['Better water retention', 'Loosens compact soil', 'Enhances root growth'],
    icon: '🌱'
  }
];

const ProductPage = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Atharv Sheti Seva Kendra</h1>
        </div>
      </header>

      <div className="product-page">
        <div className="container">
          <section className="product-hero">
            <h1>Our Products</h1>
            <p>Explore our range of certified fertilizers and soil enhancers trusted by farmers across Maharashtra.</p>
          </section>

          <div className="product-layout">
            <div className="product-grid">
              {products.map((product) => (
                <div className="product-card" key={product.name}>
                  <div className="product-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <p className="description">{product.description}</p>
                  <ul className="benefits">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  <Link to={`/order?product=${encodeURIComponent(product.name)}`}>
                    <button>Order Now</button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="product-sidebar">
              <h3>Quick Links</h3>
              <ul>
                <li>Order Fertilizer</li>
                <li>Contact Support</li>
                <li>Delivery Info</li>
              </ul>

              <div className="product-stats">
                <h4>📊 Stats</h4>
                <p>500+ farmers served</p>
                <p>100% organic certified</p>
              </div>

              <div className="product-help">
                <h4>🛠️ Help Topics</h4>
                <ul>
                  <li>Choosing the right fertilizer</li>
                  <li>Bulk order discounts</li>
                  <li>Pickup instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Atharv Sheti Seva Kendra. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ProductPage;
