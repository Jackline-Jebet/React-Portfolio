import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderTop.css';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';

function HeaderTop() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <p>Call us: +254 713 831 177 
          or  WhatsApp us:
        </p>
      </div>

      <div className='social'>
      <a href="https://api.whatsapp.com/send?phone=254713831177" target="_blank"  rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
      </div>
      <div className="topbar-right">
      <Link to="/login" className='btnHome'>Staff Login</Link>
      </div>
    </div>
  );
}

export default HeaderTop;
