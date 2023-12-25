import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', { email });
      const { token } = response.data;
      
      // Store token in local storage for further authentication
      localStorage.setItem('authToken', token);
      
      // Redirect to admin dashboard upon successful login
      navigate('/admin-dashboard');
    } catch (error) {
      setError(error.response.data.error || 'Login failed');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;