import React from 'react';
import './style1.css';
import Unit3 from './Unit3';

const Unit2 = ({ fullName, setFullName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('The password and confirm password values don\'t match');
      return;
    }
    if (!fullName || !email || !password || !confirmPassword) {
      alert('Please fill out all form fields');
      return;
    }
    alert('Form submitted successfully!');
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text"
          className="form-input"
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          style={{ width: '250px' }}
        />
        <div style={{ height: '20px' }} />
        <input type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ width: '250px' }}
        />
        <Unit3 password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
      </div>
    </form>
  );
}

export default Unit2;
