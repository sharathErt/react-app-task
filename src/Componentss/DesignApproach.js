import React from 'react';
import './DesignApproach.css';

import design1 from "../assets/images/Rocket_perspective_matte.png"
import design2 from "../assets/images/Code_perspective_matte.png"
import design3 from "../assets/images/Heart_rate_perspective_matte.png"
import design4 from "../assets/images/Shield_perspective_matte.png"
import design5 from "../assets/images/Success_perspective_matte.png"
import design6 from "../assets/images/Padlock_perspective_matte.png"
const DesignDev = () => {
  const features = [
    {
      title: "UX Driven Engineering",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design1,
      bgColor: "#29272E",
      // mrg:"20px"
    },
    {
      title: "Developing Shared Understanding",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design2,
      bgColor: "#68DBF2"
    },
    {
      title: "Proven Experience and Expertise",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design3,
      bgColor: "#FF92AE"
    },
    {
      title: "Security & Intellectual Property (IP)",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design4,
       bgColor: "#67E9F1"
    },
    {
      title: "Code Reviews",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design5,
      bgColor: "#FFEF5E"
    },
    {
      title: "Quality Assurance & Testing",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: design6,
      bgColor: "#F76680"
    }
  ];

  return (
    <div className="container">
      <div>
        <hr></hr>
      </div>
      <div className="line7"></div>
      <h2>Our design and<br></br> <span>development approach</span></h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon" style={{ backgroundColor: feature.bgColor, marginTop: feature.mrg }}>
              <img src={feature.icon} alt={feature.title} />
            </div>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignDev;
