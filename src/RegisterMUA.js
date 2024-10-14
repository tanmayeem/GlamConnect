import React from 'react';
import './RegisterMUA.css';

const RegisterMUA = () => {
  return (
    <div className="register-mua-container">
      <h1>Register as a Makeup Artist</h1>
      <form className="mua-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Portfolio Link:
          <input type="url" name="portfolio" required />
        </label>
        <label>
          Services:
          <textarea name="services" required></textarea>
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" required />
        </label>
        <label>
          Upload Portfolio Images:
          <input type="file" name="portfolioImages" accept="image/*" multiple />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

import React from 'react';

function RegisterMUA() {
  return (
    <div>
      <h1>Register as a Makeup Artist</h1>
      {/* Add your form or other content here */}
    </div>
  );
}

export default RegisterMUA;


export default RegisterMUA;
