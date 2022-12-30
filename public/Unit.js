import React, { useState } from 'react';
import './styles.css';
import Unit1 from './Unit1';

function Unit() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSignUpClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const handleLoginClick = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  return (
    <div>
      <div className="landing-page">
        <div className="container">
          <header className="header">
            <h1 className="heading">Comeo</h1>
            <p className="subheading">Cameo for comments</p>
          </header>
          <section className="main">
            <div className="screenshot-container">
              <img src="https://picsum.photos/500/300" alt="Comeo screenshot" className="screenshot" />
            </div>
            <div className="description-container">
              <h2 className="subheading uppercase">What is Comeo?</h2>
              <p className="text">We are a currency marketplace for influence.</p>
            </div>
          </section>
          <section className="cta">
            <button onClick={handleSignUpClick} className="sign-up-button">Sign up</button>
            <button onClick={handleLoginClick} className="login-button" style={{ marginLeft: '10px' }}>Log in</button>
          </section>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <Unit1 onClose={handleModalClose} />
        </div>
      )}
      {showLoginModal && (
        <div className="modal-overlay" onClick={handleLoginModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h1 className="heading">Log in</h1>
            <form>
              <label>
                Email:
                <input type="email" className="name-input" />
              </label>
              <br />
              <label>
                Password:
                <input type="password" className="name-input" />
              </label>
              <br />
              <div className="modal-footer">
                <button className="close-button" onClick={handleLoginModalClose}>Close</button>
                <button className="close-button" type="submit">Log in</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Unit;
