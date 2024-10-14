import React, { useEffect, useState } from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia';  // Add this import

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section services">
          <h3>Our Services</h3>
        </div>

        <div className="footer-section blog">
          <h3>Blog</h3>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
        </div>

        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <SocialMedia />  {/* Add SocialMedia component here */}
        </div>

        <div className="footer-section about">
          <h3>About Us</h3>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-container">
          <h3>Subscribe to our Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 GlamConnect. All Rights Reserved.</p>
      </div>

      {isVisible && 
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      }
    </footer>
  );
}

export default Footer;
