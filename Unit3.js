import React from 'react';
import './styles.css';

function Unit3({ onClose }) {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleCloseClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="heading">Terms of Service</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="modal-footer">
          <button onClick={handleCloseClick} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Unit3;
