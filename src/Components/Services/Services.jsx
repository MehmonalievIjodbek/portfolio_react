import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './JS3.docx'
const Services = () => {
  return (
    <div className='services'>
      {/* left side  */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ispum is ismpley dummy text of printing of printing Lorem
          <br /> ispum is simpley dummy text of printing</span>
          <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
          </a>
        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">

        <div style={{ left: '20rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
          />
        </div>

        {/* second card */}
        <div style={{ top: "12rem", left: "-1rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "16rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }

          />
        </div>
        <div className='blur s-blur2' style={{background: "var(--purple)"}}>
          
        </div>
      </div>
    </div>
  )
}

export default Services