import React from 'react'
import ContactImage from "../assets/images/mc-logo.png"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      {/* <h1>Contact Us</h1> */}
      <div className='leftContact' style={{backgroundImage: `url(${ContactImage})`}}>

      </div>

      <div className='rightContact'>
        <form>
          <label htmlFor='name'>Full Name</label>
          <input type='text' placeholder='Enter Full Name ..' name='text' required></input>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter Your Email..' required></input>
          <label htmlFor='message'>Message</label>
          <textarea type='message' name='message' placeholder='Enter Your Message..' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
