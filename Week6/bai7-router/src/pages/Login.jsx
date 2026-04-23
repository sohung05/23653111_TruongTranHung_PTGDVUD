import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/profile';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    login({ name: email.split('@')[0], email: email });
    navigate(from, { replace: true });
  };

  return (
    <div className="container" style={{ maxWidth: '300px', margin: '5rem auto', border: '1px solid #ccc', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.2rem' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.2rem' }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
