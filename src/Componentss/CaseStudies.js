// import React from 'react';
// import './CaseStudies.css';
import arrow1 from "../assets/images/Deco-img-arrow.png"
import arrow2 from "../assets/images/Deco-img-arrow (1).png"

import CaseSt1 from "../assets/images/Case-study__image.png"
import CaseSt2 from "../assets/images/Case-study__image (1).png"
import CaseSt3 from "../assets/images/Case-study__image (2).png" 

// const CaseStudies = () => {
//   return (
//     <section className="case-studies">
//        <div> 
//         <div style={{display:"flex", marginTop:"-190",justifyContent:"space-evenly", alignItems:"center", gap:"2rem", position:"relative", zIndex:"1", marginBottom:"21rem", position:'absolute'}}><img src={arrow1}></img></div>  
//         <section className="case-studies">
//           <h2>Our recent<br />Case studies</h2>
//         </section>
//         <div><img className='arr2' src={arrow2} ></img></div> 
//       </div> 
//       <div className="case-studies-container">
//         <div className="case-study1">
//           <div className='cs-img'>
//             <img src={CaseSt1} alt="Case Study 1" />
//           </div>
//           <div className='cs-pg'>
//             <h3>Website Design for SCFC Canada</h3>
//             <p>Born out of a vision, ...</p>
//             <a href="/case-studies/scfc-canada" className="read-more">Read more</a>
//           </div>
//         </div>

//         <div className="case-study">
//           <img src="path_to_image2" alt="Case Study 2" />
//           <h3>Website Design for SCFC Canada</h3>
//           <p>Born out of a vision, ...</p>
//           <a href="/case-studies/scfc-canada" className="read-more">Read more</a>
//         </div>
//         <div className="case-study">
//           <img src="path_to_image3" alt="Case Study 3" />
//           <h3>Website Design for SCFC Canada</h3>
//           <p>Born out of a vision, ...</p>
//           <a href="/case-studies/scfc-canada" className="read-more">Read more</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;

import React from 'react';
import './CaseStudies.css';

const  CaseStudies= () => {
  const caseStudies = [
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      imgSrc: CaseSt1, 
      className: "case-study-one",
    },
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      imgSrc: CaseSt2, 
      className: "case-study-two",
    },
    {
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      imgSrc: CaseSt3, 
      className: "case-study-three",
      
    },
  ];

  return (
    <div className="container">
      <div> 
       {/* <div style={{display:"flex", marginTop:"-9rem",justifyContent:"space-evenly", alignItems:"center", gap:"2rem", position:"relative", zIndex:"1", marginBottom:"21rem", position:'absolute'}}><img src={arrow1}></img></div>   */}
       {/* <div className="circle2"></div> */}
       <section className="case-studies">
          {/* <div className="line3"></div> */}
          {/* <h2>Our recent <br></br><span>Case studies</span></h2> */}
        </section>
        {/* <div><img className='arr2' src={arrow2} ></img></div>  */}
      </div>
      
      {caseStudies.map((study, index) => (
        <div className={`case-study ${study.className}`} key={index}>
          <img src={study.imgSrc} alt={study.title} />
          <div className="text">
            <h3>{study.title}</h3>
            <p>{study.description}</p>
            <a href="#">Read more &gt;</a>
          </div>
        </div>
      ))}
      <div className="more-studies">
        <a href="#">Read more case studies &gt;</a>
      </div>
      
      <div >
      <hr style={{width:"100%"}}></hr>
      </div>
    </div>
  );
};

export default CaseStudies;
