import React from 'react';
import './Services.css';
import serviceImg1 from '../assets/images/service-img1.png';
import serviceImg2 from '../assets/images/service-img2.png';
import serviceImg3 from '../assets/images/service-img3.png';

import slider from "../assets/images/Carousel-slider-numb.png"

const services = [
  { img: serviceImg1, title: 'Mobile App Development', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { img: serviceImg1, title: 'Mobile App Development', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { img: serviceImg2, title: 'Web Design & Development', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { img: serviceImg3, title: 'Software Testing Service', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { img: serviceImg3, title: 'Software Testing Service', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' }
];

const Services = () => {
  return (
    <>
     <div className="gd">
        <div className="gd1"></div>
      </div>
    <section className="services">
     
      <h2>Services we offer</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.img} alt={service.title} className='circle' />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
     
      <br></br>
      <div className='nodes'>
        <div className='ellipse2'></div>
        <div className='ellipse3'></div>
        <div className='ellipse1'></div>
        <div className='ellipse4'></div>
        <div className='ellipse5'></div>
      </div>

      <div className='slide'>
        <img src={slider}></img>
      </div>
      {/* <div className="gdd">
        <div className="gd11"></div>
      </div> */}
     
    </section>
    <div className="gdd">
        <div className="gd11"></div>
      </div>
    </>
  );
};

export default Services;
