import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

const Services = () => {
  return (
    <div className='services'>
        {/* left side  */}
        <div className="awesome">
             <span>My Awesome</span>
             <span>Services</span>
             <span>Lorem ispum is ismpley dummy text of printing of printing Lorem 
            <br /> ispum is simpley dummy text of printing</span>
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blur1' style={{ background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            
        </div>
    </div>
  )
}

export default Services