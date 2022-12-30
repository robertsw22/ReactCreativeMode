import React from 'react';
import './style1.css';  // Import the style1.css file
import Unit1 from './Unit1';  // Import the Unit1 component

const Page3 = () => {
  return (
    <div className="form-container">
      {/* Update the form title to have a black color */}
      <h1 className="form-title" style={{ color: '#000' }}>Sign Up</h1>
      {/* Render the Unit1 component */}
      <Unit1 />
    </div>
  );
}

export default Page3;
