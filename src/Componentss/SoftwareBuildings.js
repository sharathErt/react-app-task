import React from 'react';
import './SoftwareBuildings.css';

import swt1 from "../assets/images/Rectangle 17.png"
import swt2 from "../assets/images/Rectangle 18.png"
import swt3 from "../assets/images/Rectangle 19.png"

import CEO from "../assets/images/Ellipse 185.png"
import CEO2 from "../assets/images/Ellipse 185 (1).png"
import CEO3 from "../assets/images/Ellipse 185 (2).png"

const SoftwareCS = () => {
  const caseStudies2 = [
    {
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
      quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules.",
      ceo: CEO,
      author: "Jeeva Markram",
      position: "CEO",
      imgSrc: swt1
    },
    {
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
      quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules.",
      ceo: CEO2,
      author: "Jeeva Markram",
      position: "CEO",
      imgSrc: swt2
    },
    {
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
      quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules.",
      ceo: CEO3,
      author: "Jeeva Markram",
      position: "CEO",
      imgSrc: swt3
    },
  ];

  return (
    <div className="container">
         <div className="line3"></div>
    <h2>Way of building <br></br> <span>Great Software</span></h2>
    {caseStudies2.map((study, index) => (
      <div className={`case-study2 ${index % 2 === 0 ? 'right' : 'left'}`} key={index}>
        <img src={study.imgSrc} alt={study.title} className="case-study-image2" />
        <div className="text2">
          <h3>{study.title}</h3>
          <p>{study.description}</p>
          <blockquote>
            <p>{study.quote}</p>
            <footer>
                <img src={study.ceo} style={{height:"42px", width:"42px",marginLeft:"-29rem"}}></img>
              <strong>{study.author}</strong>, {study.position}
            </footer>
          </blockquote>
        </div>
      </div>
    ))}
  </div>
  );
};

export default SoftwareCS;
