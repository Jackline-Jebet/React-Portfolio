import React, { useState } from 'react';
import "../styles/ForgotPassword.css"
import axios from 'axios';


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      
      // Check the response. This depends on how your backend is set up.
      if (response.data && response.data.success) {
          setMessage('Reset link sent to your email.');
      } else {
          throw new Error('Failed to send reset link');
      }

  } catch (error) {
      setMessage('Error sending reset link. Try again later.');
  }
};


  return (
    <div className='forgotPassword'>
     <h2>Forgot Password</h2>
     <div className='glass-password'>
     <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />

      <button type='submit'>Send Reset Link</button>
     </form>
     {message && <p>{message}</p>}

     </div>
    </div>
  )
}

export default ForgotPassword
