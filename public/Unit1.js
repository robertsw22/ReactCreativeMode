import React from 'react';
import './styles.css';

function Unit1({ onClose }) {
  const handleCloseClick = () => {
    onClose();
  };

  const handleLinkInstagramClick = () => {
    window.open('https://www.facebook.com/v7.0/dialog/oauth?client_id=your-app-id&redirect_uri=your-redirect-uri&state=your-state-value');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!firstName || !email || !password || !confirmPassword) {
      alert('Please fill out all the required fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      // proceed with the submission
    }
  };

  return (
    <div className="modal" onClick={handleCloseClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="heading">Sign up for Comeo</h2>
        <p className="text">
          Enter your details below to get started.
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First name" className="name-input" />
          <input type="email" name="email" placeholder="Email" className="name-input" />
          <input type="password" name="password" placeholder="Password" className="name-input" />
          <input type="password" name="confirmPassword" placeholder="Confirm password" className="name-input" />
          <div className="modal-footer">
            <button onClick={handleLinkInstagramClick} className="link-instagram-button">Link Instagram</button>
            <button type="submit" className="finish-button">Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Unit1;
