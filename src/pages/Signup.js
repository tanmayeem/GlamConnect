import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pwd);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(phone);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);

    if (!validatePassword(pwd)) {
      setPasswordError('Password must contain at least 8 characters, one uppercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setPhone(phone);

    if (!validatePhone(phone)) {
      setPhoneError('Phone number must contain only numericals and be 10 to 15 digits long.');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid phone number.');
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
    } else if (!passwordError && !phoneError) {
      // Proceed with signup (e.g., send data to server)
      alert('Signup successful!');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Your Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && <p className="error">{phoneError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username (Optional)</label>
          <input type="text" id="username" placeholder="Create a username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
        </div>
        <div className="form-group terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the <a href="#terms">Terms and Conditions</a></label>
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="login-link">Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
