import React from 'react';
import './HeroSection.css';

import Hero from "../assets/images/Hero-image.png"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Great <span className='bg-text'>Product</span> is <br></br> <span>built by great</span><span className='bg-text'> teams</span></h1>
        <p>We help build and manage a team of world-class developers <br></br> to bring your vision to life.</p>
        <button>Let's get started!</button>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Team working" />
      </div>
     
    </section>
  );
};

export default HeroSection;
