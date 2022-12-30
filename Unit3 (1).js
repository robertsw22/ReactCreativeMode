import React from 'react';

const Unit3 = ({ password, setPassword, confirmPassword, setConfirmPassword }) => {
  return (
    <>
      <div style={{ height: '20px' }} />
      <input type="password"
        className="form-input"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={{ width: '250px' }}
      />
      <div style={{ height: '20px' }} />
      <input type="password"
        className="form-input"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        style={{ width: '250px' }}
      />
      <div style={{ height: '20px' }} />
      <button type="button" className="form-button" style={{ width: '250px' }}>
        Sign into Facebook
      </button>
      <div style={{ height: '20px' }} />
      <button type="submit" className="form-button" style={{ width: '250px' }}>
        Finish Signup
      </button>
    </>
  );
}

export default Unit3;
