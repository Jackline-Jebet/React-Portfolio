import React, { useState } from 'react';
import Logo from "../assets/images/logo1-removebg-preview (1).png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// function Dropdown({ label, links, className }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(prevIsOpen => !prevIsOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`dropdown ${className}`} onClick={toggleDropdown}>
//       <span>{label} <ArrowDropDownIcon /></span>
//       {isOpen && (
//         <div className='dropdown-content'>
//           {links.map((link, index) => (
//             <Link key={index} to={link.path} onClick={closeDropdown}>
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  // const portfolioLinks = [
  //   { name: 'Gallery', path: '/Gallery' },
  //   { name: 'Videos', path: '/Videos' },
  // ];

  // const moreLinks = [
  //   { name: 'Contact', path: '/contact' },
  //   { name: 'Testimonials', path: '/testimonials' },
  //   { name: 'FAQs', path: '/faqs' },
  // ];

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='logo' />

        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faqs">FAQs</Link>
          {/* <Dropdown label="Portfolio" links={portfolioLinks} className="portfolio-dropdown" />
          <Dropdown label="More" links={moreLinks} className="more-dropdown" /> */}
        </div>
      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faqs">FAQs</Link>
        {/* <Dropdown label="Portfolio" links={portfolioLinks} className="portfolio-dropdown" />
        <Dropdown label="More" links={moreLinks} className="more-dropdown" /> */}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    
    </div>
  );
}

export default Navbar;
