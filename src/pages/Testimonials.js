import React from 'react'
import Testimony1 from '../assets/images/testimony1.jpeg';
import Testimony2 from '../assets/images/testimony2.jpeg'
import "../styles/Testimonial.css"

function Testimonials() {
  return (
    <div className='testimonials'>
      <h2>Testimonials</h2>
      <div className='testimony'>
      <blockquote>
      <img className="test1" src={Testimony1} alt='test' />
      <cite>Mike Kibisu</cite>
    </blockquote>

    <blockquote>
      <img className="test1" src={Testimony2} alt='test' />
      <cite>Nelson Kirwa</cite>
    </blockquote>
      </div>
      
    </div>
  )
}

export default Testimonials
