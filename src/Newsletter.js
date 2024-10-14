// src/components/Newsletter.js

import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <h2>Subscribe to our Newsletter</h2>
      <form>
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
