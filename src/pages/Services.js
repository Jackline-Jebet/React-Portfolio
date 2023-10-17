import React from 'react'
import BannerImage1 from "../assets/images/pic13.jpg"
import BannerImage2 from "../assets/images/pic44.webp"
import BannerImage3 from "../assets/images/pic44.webp"
import BannerImage4 from "../assets/images/pic44.webp"
import BannerImage5 from "../assets/images/pic44.webp"
import BannerImage6 from "../assets/images/pic44.webp"
import BannerImage7 from "../assets/images/pic44.webp"
import BannerImage8 from "../assets/images/pic44.webp"
import BannerImage9 from "../assets/images/pic44.webp"
import "../styles/Services.css"

function Services() {
  return (
    <div className='services'>
     <div className="container">
      <div className="card">
        <h3>Weddings & Ruracio:</h3>
        <img src={BannerImage1} alt="Weddings & Ruracio" className="imageBox" />
        
      <ul>
        <li>Introduce the bride, groom, and their families.</li>
        <li>Share traditional tales and practices</li>
        <li>Engage with guests, ensure a celebratory mood.</li>
      </ul>
      </div>

       <div className="card">
        <h3>Corporate Events</h3>
        <img src={BannerImage2} alt="Weddings & Ruracio" className="imageBox" />

       <ul>
        <li>Facilitate the flow of an event or conference.</li>
        <li>Engage with audience to keep energy levels up.</li>
        <li>Ensuring adherence to the event's schedule.</li>
      </ul>
      </div>

      <div className="card">
        <h3>RoadShow events</h3>
         <img src={BannerImage3} alt="Weddings & Ruracio" className="imageBox" />
        
        <ul>
          <li>Announcements and Branding</li>
          <li>Engagement and Interaction</li>
          <li>Enhance Positive Energy</li>
          {/* <li>Facilitating the flow of a corporate event or conference.</li> */}
        </ul>
      </div>

      <div className="card">
        <h3>Product/Brand Launches</h3>
         <img src={BannerImage4} alt="Weddings & Ruracio" className="imageBox" />
       
        <ul>
         <li>Presenting new products to the audience.</li>
         <li>Introduce representatives or guests.</li>
         <li>Create an engaging & exciting atmosphere.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Birthdays Celebrations</h3>
         <img src={BannerImage5} alt="Weddings & Ruracio" className="imageBox" />
      
        <ul>
         <li>Introduction of the guest of honor.</li>
         <li>Guiding the event's activities and games.</li>
         <li>Engage with guests, ensure a lively atmosphere.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Baby Showers</h3>
         <img src={BannerImage6} alt="Weddings & Ruracio" className="imageBox" />
        
        <ul>
         <li>Create a warm and joyous environment to celebrate the upcoming arrival.</li>
         <li>Organize and lead baby-related games|activities.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Graduation & Award Ceremonies</h3>
         <img src={BannerImage7} alt="Weddings & Ruracio" className="imageBox" />
       
        <ul>
         <li>Introduction of nominees and recipients.</li>
         <li>Facilitating the presentation of awards.</li>
         <li>Keep the mood celebratory | honor awardees.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Team Building</h3>
        <img src={BannerImage8} alt="Weddings & Ruracio" className="imageBox" />
       
        <ul>
         <li>Guide participants through icebreakers|group activities|reflections.</li>
         <li>Encourage active participation.</li>
         <li>Encourage teamwork & collaboration.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Fundraising & Charity Events</h3>
         <img src={BannerImage9} alt="Weddings & Ruracio" className="imageBox" />
        
        <ul>
         <li>Engaging with donors and attendees.</li>
         <li>Providing information about the cause.</li>
         <li>Encouraging and facilitating donations.</li>
        </ul>
      </div>
      

    </div>
    </div>
  )
}

export default Services
