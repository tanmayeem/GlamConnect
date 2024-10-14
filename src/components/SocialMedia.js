// src/components/SocialMedia.js

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="social-media-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </a>
        </div>
    );
};

export default SocialMedia;
