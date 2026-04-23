import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Your Profile</h1>
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <button onClick={handleLogout} className="btn btn-outline" style={{ color: 'red', marginTop: '1rem' }}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
