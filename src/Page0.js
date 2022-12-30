import React from 'react';
import './style0.css';  // Import the CSS file
import Unit0 from './Unit0';  // Import the Unit0 component

const Page0 = () => {
  return (
    <div>
      <Unit0 />  {/* Render the header and hero section */}

      {/* Footer */}
      <footer className="footer">
        <ul className="footer-links">
          <li className="footer-link"><a href="/terms-of-use">Terms of Use</a></li>
          <li className="footer-link"><a href="/privacy-policy">Privacy Policy</a></li>
          <li className="footer-link"><a href="/support">Support</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Page0;
