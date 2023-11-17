import React from 'react';
import Logo from "../assets/images/Logowhite.jpeg";
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css"
// import Testimonials from '../pages/Testimonials';
// import Services from '../pages/Services';
// import Gallery from '../pages/Gallery';

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-content">
      <div className='left-footer'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='right-footer'>
         <p className='txt'>Social Media Connect</p>
        <div className='socialMedia'>
        
          <a href="https://instagram.com/mc_supersammy_254?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a a href="https://instagram.com/mc_supersammy_254?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
          </a>
            
          <a href="https://api.whatsapp.com/send?phone=254713831177" target="_blank"  rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>

          <a href="https://www.tiktok.com/@your-tiktok-handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className='faTiktok' />
          </a>

          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>

          <a href="https://www.linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
         </a>
        </div>
        </div>
        </div>

        <div className='main'>

          <div className='left-contact'>
            <p>Contact Us</p>
            <p className='para1'>We are located in <nav>Nairobi-Kenya</nav></p>
            <p className='para1'>Need Our Help?</p>
            <p className='para1'>Got Questions ? Call us <br /> 24/7</p>
            <p>Call Us: +254 713 831 177</p>
            <p className='para1'>or</p>
            <p>Email us: samuelmuthoka99@gmail.com</p>
          </div>

         

        <div className='nav-links'>
          <p>Quick Links</p>
          <Link to="/about">About Us</ Link>
          <Link to="/contact">Contact Us</Link>    
          <Link to="/gallery">Our Gallery</Link>
          <Link to="/services"> Our Services</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/testimonials"> Mc Testimonials</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/faqs">Social Media Disclaimer</Link>

        </div>

        <div className='service'>
          <p>Our Services</p>
      <li>Graduation & Award Ceremonies</li>
       <li>Fundraising & Charity Events</li>
        <li>Product & Brand Launches</li>
        <li>Birthdays Celebrations</li>
          <li>Weddings & Ruracio</li>
          <li>Corporate Events</li>
           <li>RoadShow Events</li>
           <li>Team Building</li>
            <li>Baby Showers</li>

        </div>

        <div className='other'>
            <p>Other Services</p>
            <li>Quality PA System</li>
            <li>Tents & Chairs</li>
            <li>Event Gardens</li>
            <li>Decorations</li>
            <li>Generators</li>
            <li>Acrobats</li>
            <li>Skaters</li>
            <li>Dancers</li>
          </div>
        </div>

   
      {/* <Link to="/login" className='btnHome'>Login</Link> */}
     
  

    <div className='copyright-txt'>
    <p>&copy; 2023 MC_Supersammy_254. All rights reserved</p>
    </div>
  </div>
  );
}


export default Footer