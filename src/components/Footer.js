import React from 'react';
import Logo from "../assets/images/Logowhite.jpeg";
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-content">
      <div className='left-footer'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='right-footer'>
         <p className='txt'>Follow Us</p>
        <div className='socialMedia'>
        
          <a href="https://instagram.com/mc_supersammy_254?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
            <FacebookIcon />
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

   
      {/* <Link to="/login" className='btnHome'>Login</Link> */}
      </div>
    </div>

    <div className='copyright-txt'>
    <p>&copy; 2023 MC_Supersammy_254. All rights reserved</p>
    </div>
  </div>
  );
}


export default Footer