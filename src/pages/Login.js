import React, { useState } from 'react'
import "../styles/Login.css"
import axios from 'axios';
import { Link } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [rememberMe, setRememberMe] = useState (false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  const response = await axios.post('http://localhost:5000/login', {
    username: username,
    password: password
  }, {
    headers: {
        'Content-Type': 'application/json'
    }
  });

  // const token = response.data.token;

      // Storing token in local storage.
      if (response.data && response.data.token) {
        // const token = response.data.token;
        localStorage.setItem('token', response.data.token);

         // Clear input fields upon successful login
      setUsername('');
      setPassword('');
      setError(''); // Clear any errors

      } else {
        throw new Error('Token not received');
      };

      // Optionally, navigate the user to a dashboard or another page
      // navigationFunction(); 

    } catch (error) {
      console.error('Login failed:', error);

      // If the server responds with a specific error message, we might want to display it.
      const serverMessage = error.response && error.response.data && typeof error.response.data === 'string' ? error.response.data : 'Connection issue';
setError(serverMessage);



      // console.log(error.response.data);

      // setError('Invalid credentials or connection issue');

    }
  };


   return (
    <div className='login-page'>
      <div className='glass-panel'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='username' placeholder='Enter Username..' value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
          <input type='password' id='password' name='password' placeholder='Enter Password..' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='checkbox-container'>
          <input type='checkbox' id='rememberMe' checked={rememberMe}  onChange={() => setRememberMe(!rememberMe)} />
          <label htmlFor='rememberMe'>Remember me.</label>

          
        </div>

        <button type='submit'>Login</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Show error feedback */}

      <div className='additional-links'>
      <Link to="/forgot-password">Forgot Password?</Link>
      <Link to="/register">Register</Link>

      </div>
     </div>
    </div>
  );
}

export default Login;