import React, { useState } from 'react';
import './style1.css';
import Unit2 from './Unit2';

const Unit1 = () => {
  // Declare state variables to store the form field values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="form-page-container">
      <h2 className="form-title">Sign Up</h2>
      <Unit2 fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
    </div>
  );
}

export default Unit1;
