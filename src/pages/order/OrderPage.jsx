import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../../styles/OrderPage.css';

const OrderPage = () => {
  const formRef = useRef();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prefilledProduct = queryParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: prefilledProduct,
    quantity: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, product: prefilledProduct }));
  }, [prefilledProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage('✅ Order submitted successfully!');
        setFormData({
          name: '',
          email: '',
          product: '',
          quantity: '',
          message: ''
        });
      })
      .catch(() => {
        setStatusMessage('❌ Failed to submit order. Please try again.');
      });
  };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Atharv Sheti Seva Kendra</h1>
        </div>
      </header>

      <div className="order-page">
        <div className="container">
          <section className="order-hero">
            <h1>Place Your Order</h1>
            <p>Order certified fertilizers and soil enhancers directly from our trusted store.</p>
          </section>

          <div className="order-layout">
            <div className="order-form">
              <h2>Order Form</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />

                <label>Product</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Product name"
                  required
                />

                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  required
                />

                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional instructions"
                />

                <button type="submit">Submit Order</button>
                {statusMessage && <p className="status-message">{statusMessage}</p>}
              </form>
            </div>

            <div className="order-sidebar">
              <div className="sidebar-column">
                <div>
                  <h3>📦 Popular Products</h3>
                  <ul>
                    <li>Organic Compost</li>
                    <li>Urea Fertilizer</li>
                    <li>NPK 20-20-20</li>
                  </ul>
                </div>

                <div>
                  <h3>📞 Contact Info</h3>
                  <p><strong>Phone:</strong> +91 0000000000</p>
                  <p><strong>Email:</strong> ...........@gmail.com</p>
                </div>

                <div>
                  <h3>🕒 Store Hours</h3>
                  <p>Mon–Sat: 9 AM – 6 PM</p>
                </div>
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

export default OrderPage;
