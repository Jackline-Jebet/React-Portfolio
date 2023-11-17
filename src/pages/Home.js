import React from 'react';
import { Link } from "react-router-dom";
// import BackImage from "../assets/images/pic30.jpg";
import "../styles/About.css"
import  Resume from "../Docs/Samuel_Muthoka_Resume.pdf";
import "../styles/Home.css";

function Home() {
  return (
      <div className='home'>
        <div className='container'>
          {/* <div className='backgroundImg' style={{ backgroundImage: `url(${BackImage})` }}></div> */}
          <div className='headerContainer'>
              <h1>!MC_Supersammy_254 All The WAy!</h1>
              <h2>For Legitimate Emceee</h2>
              <span>&</span>
              <h3>Event Mastery Services</h3>
              <Link to="/footer">
                  <button className='btnHome'>Let's Connect Now</button>
              </Link>
          </div>
          </div>
          
    
    

<div className='about'  >
{/* <div className='backgroundImg' style={{ backgroundImage: `url(${BackImage})` }}></div> */}
     <h1>About Me</h1>
     <div className='aboutTop'>

     {/* <div className='text'>
          <p> Transforming Ordinary Events into Extraordinary Experiences.</p>
          <p> Lets bring Your Event's Story to Life, <br /> One Moment at a Time.</p>
          </div> */}

     <h2>I'm</h2>
     <h3>Samuel Muthoka</h3>
   <h4>Event Master | Emceee <span className="country">Nairobi-Kenya</span></h4>
   <p>Hi, Welcome to my portfolio. I am a dynamic and versatile Master of Ceremony <br />
      with over 5 years of experience in hosting a diverse range of events,
       from corporate conferences to cultural festivals. <br /> Renowned for crafting 
       engaging narratives, connecting with varied audiences, and ensuring events flow seamlessly. <br />
        Committed to elevating every occasion with charisma, professionalism, and a keen attention to detail.</p>
     </div>

     <h1>My Skills</h1>
   <div className='aboutBottom'>

   <ul>
    <li>Audience engagement and interaction.</li>
    <li>Script writing and content creation.</li>
    <li>Crisis management and on-the-spot problem solving.</li>
    <li>Strong coordination with event organizers and technical teams</li>
    <li>Fluent in both English and Kiswahili, allowing for bilingual events</li>
   </ul>  
     </div>
   <button className='btn2'>
     <a 
       href={Resume} 
       target="_blank" 
       rel="noopener noreferrer" 
       className="top-btn"
     >
       Download CV
     </a>
     </button>


     </div>
 
     </div>
 )
}


export default Home
