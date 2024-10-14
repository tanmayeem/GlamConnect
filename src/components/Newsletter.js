import React, { useState } from 'react';
import './Newsletter.css'; // Assuming you will create a separate CSS file for styling

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Here you would normally handle the email submission logic
  };

  return (
    <div className="newsletter">
      <h3>Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
