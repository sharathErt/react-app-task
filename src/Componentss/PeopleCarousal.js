import React from 'react';
import './PeopleCarousal.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo1 from "../assets/images/img_logo_1.png"
import logo2 from "../assets/images/img_logo_2.png"
import logo3 from "../assets/images/img_logo_3.png"
import logo4 from "../assets/images/img_logo_4.png"
import logo5 from "../assets/images/img_logo_5.png"
import logo6 from "../assets/images/img_logo_6.png"
import logo7 from "../assets/images/img_logo_7.png"

import comma from "../assets/images/comma.png"
import group from "../assets/images/Group.png"
import group1 from "../assets/images/Group 2.png"
import group2 from "../assets/images/Group 2 (1).png"
import group3 from "../assets/images/Group 2 (2).png"
import group4 from "../assets/images/Group 2 (3).png"


import Ellipse1 from "../assets/images/Ellipse 1.png"

import LeftBtn from "../assets/images/Btn-left.png" 
import RightBtn from "../assets/images/Btn-right.png"
import arrows from "../assets/images/Frame 22.png"
import arrow1 from "../assets/images/Deco-img-arrow.png"
import arrow2 from "../assets/images/Deco-img-arrow (1).png"

const PeopleWork = () => {
  return (
    <div className="PeopleWork">
      <section className="partners">
      <div className='line'></div>
        <h2>Meet the People<br /><span >We are Working With</span></h2>
        <div>
        <div className='buttons'>
          <img src={arrows}></img>
        </div>
        <div className="gd3" style={{margin:"auto"}}>
          <div className="gd33"></div>
        </div>
        </div>

        
        <div className="partners-logos">
        <marquee>
          <img style={{margin: "0rem 3rem"}} src={logo1} alt="Sampath Cream House" />
          <img style={{margin: "0rem 3rem"}} src={logo2} alt="logo2" />
          <img style={{margin: "0rem 3rem"}} src={logo3} alt="AdClipse" />
          <img style={{margin: "0rem 3rem"}} src={logo4} alt="PJC Bridge" />
          <img style={{margin: "0rem 3rem"}} src={logo5} alt="ClickOrder" />
          <img style={{margin: "0rem 3rem"}} src={logo6} alt="TechMate" />
          <img style={{margin: "0rem 3rem"}} src={logo7} alt="b" />
        </marquee>
        </div>
      </section>
         
      <section className="testimonials">
        <div><img src={LeftBtn}></img></div>
        <div>
          <div>
            <p className='lineHr'></p>
            <h2>Why customers love<br /><span>working with us</span></h2>
          </div>
        <div className="testimonial-carousel">
          {/* <FaChevronLeft className="carousel-arrow" /> */}
          <div className="testimonial-content">
            <img src={comma} alt='comma'></img>
            <span>Without any doubt I recommend Alcaline Solutions as one of <br></br> the best web design and digital marketing agencies. One of <br></br>the best agencies I’ve came across so far. Wouldn’t be<br></br> hesitated to introduce their work to someone else.</span>
            <img src={group} className='g1' alt='g1'></img>
            <div className="testimonial-author">
              {/* <img src="/path/to/image1.png" alt="Romeena De Silva" /> */}
              <div className=''>
              <img src={Ellipse1} alt='e1'></img>
              <h3>Romeena De Silva</h3>
              <div className="stars">★★★★★</div>
              <h4>Janet Cosmetics</h4>
              
              </div>
              
              <div className=''>
              <img src={group1} alt='e1'></img>
              <h3>Romeena De Silva</h3>
              <div className="stars">★★★★★</div>
              <h4>Janet Cosmetics</h4>
              
              </div>
              <div className='cardShadow'>
              <img src={group2} alt='e1'></img>
              <h3>Imran Khan</h3>
              <div className="stars">★★★★★</div>
              <h4>Software Engineer</h4>
              
              </div>
              <div className=''>
              <img src={group3} alt='e1'></img>
              <h3>Romeena De Silva</h3>
              <div className="stars">★★★★★</div>
              <h4>Janet Cosmetics</h4>
              
              </div>
              <div className=''>
              <img src={group4} alt='e1'></img>
              <h3>Romeena De Silva</h3>
              <div className="stars">★★★★★</div>
              <h4>Janet Cosmetics</h4>
              
              </div>
            </div>
          </div>
          {/* <FaChevronRight className="carousel-arrow" /> */}
        </div>
        </div>
        <div><img src={RightBtn}></img></div>
        
      </section>

      <div> 
        <div style={{display:"flex", marginTop:"-9rem",marginLeft:"12rem",justifyContent:"space-evenly", alignItems:"center", gap:"2rem", position:"relative", zIndex:"1", marginBottom:"21rem", position:'absolute'}}><img src={arrow1}></img></div>  
        <div className="circle2"></div>
        <section className="case-studies">
        <div className="line8"></div>
          <h2>Our recent<br /><span>Case studies</span></h2>
        </section>
        <div><img  src={arrow2} style={{display:"flex", marginTop:"-25rem",marginLeft:"62rem",justifyContent:"space-evenly", alignItems:"center", gap:"2rem", position:"relative", zIndex:"1", marginBottom:"21rem", position:'absolute'}} ></img></div> 
      </div> 
    </div>
  );
};

export default PeopleWork;
