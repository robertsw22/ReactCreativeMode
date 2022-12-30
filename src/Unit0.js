import React from 'react';
import { Link } from 'react-router-dom';

const Unit0 = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <h1 className="logo">Comeo</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/features">Features</a></li>
            <li className="nav-item"><a href="/pricing">Pricing</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/terms-of-use">Terms of Use</a></li>
            <li className="nav-item"><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero">
        {/* Update the hero content to display "Cameo for Instagram Comments" */}
        <h2 className="hero-title">Cameo for Instagram Comments</h2>
        <p className="hero-description">Boost your Instagram engagement with Comeo! Our tool makes it easy to manage and respond to comments on your Instagram posts, as well as comment on other posts</p>
        {/* Wrap the button in a container element and apply the padding to the container element */}
        <div style={{ paddingTop: '60px' }}>
          {/* Add a link to the sign up page using the Link component from react-router-dom */}
          <Link to="/sign-up">
            <button className="hero-cta">Sign Up Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Unit0;
