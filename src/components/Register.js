import React, { useState } from 'react'
import "../styles/Register.css"
import axios from 'axios';

function Register() {
  const [username, setUserName] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [message, setMessage] = useState ("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
          username,
          email,
          password
      });
      
      // Check the response. This depends on how your backend is structured.
      if (response.data && response.data.success) {
          setMessage(`User ${username} registered successfully!`);
      } else {
          throw new Error('Registration failed');
      }

  } catch (error) {
      setMessage('Error during registration. Try again later.');
  }
};


  return (
    <div className='register'>
      <h2>Register</h2>
      <div className="glass-form">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Choose a usernname' />
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Choose a password" 
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}
export default Register
