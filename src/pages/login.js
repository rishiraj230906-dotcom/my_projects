import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './register.css'

const Login = ({ onLogin,set_Username}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //   variable for database connection 
  const validUsers = [
    { username: 'user1', password: 'user@123' },
    { username: 'admin', password: 'admin@123' },
    { username: 'rishiraj', password: 'rishi@123' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValid) {
      onLogin();
      navigate('/');
      set_Username(username);
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 register'>
      <div class="login-card p-4 card register-card">
        <h3 class="text-center mb-4 fw-bold">Login</h3>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" class="form-control" id="username" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" id="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-danger">Login</button>
          </div>
        </form>
        <p class="mt-3 text-center">Not a User? <Link to="/register" class="text-danger">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
