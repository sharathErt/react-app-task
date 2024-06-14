// import React from 'react';


// const DevelopmentSteps = () => {
//   return (
//     <section className="development-steps">
//       <h2>How development <br /> through Alcaline works</h2>
//       <div className="steps-container">
//         <div className="step">
//           <h3>#1 Assemble the right team</h3>
//           <p>We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.</p>
//         </div>
//         <div className="step">
//           <h3>#2 Sprint planning</h3>
//           <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
//         </div>
//         <div className="step">
//           <h3>#3 Tech architecture</h3>
//           <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
//         </div>
//         <div className="step">
//           <h3>#4 Standups & weekly demos</h3>
//           <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
//         </div>
//         <div className="step">
//           <h3>#5 Code reviews</h3>
//           <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
//         </div>
//         <div className="step">
//           <h3>#6 Iterative delivery</h3>
//           <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevelopmentSteps;


import React from 'react';
import './DevelopmentSteps.css';
import trophy from '../assets/images/Trophy_perspective_matte.png';

function DevelopmentSteps() {
  return (
    <div className="App">
      <div className="headerDev">
      <div className="line4"></div>
        <h2>How development</h2>
        <h1>through Alcaline works</h1>
      </div>
      <div className="process">
        <div className="line horizontal"></div>
        <div className="steps">
          <div className="step">
            <div className="step-content">
              <h3>#1 Assemble the right team</h3>
              <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
            </div>
            <div className="vertical-line"></div>
          </div>
          <div className="step">
            <div className="step-content">
              <h3>#2 Tech architecture</h3>
              <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
            </div>
            <div className="vertical-line"></div>
          </div>
          <div className="step">
            <div className="step-content">
              <h3>#3 Code reviews</h3>
              <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
            </div>
            <div className="vertical-line"></div>
          </div>
          <div className="step">
            <div className="step-contentD">
              <h3>#4 Sprint planning</h3>
              <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
            </div>
            <div className="vertical-lineB"></div>
          </div>
          
          <div className="step">
            <div className="step-contentD">
              <h3>#5 Standups & weekly demos</h3>
              <p>Standups, weekly demos, and reviews ensure everyone is on the same page and can raise their concerns.</p>
            </div>
            <div className="vertical-lineB2"></div>
          </div>
          
          <div className="step">
            <div className="step-contentD">
              <h3>#6 Iterative delivery</h3>
              <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
             
            </div>
            <div className="vertical-lineB3"></div>
          </div>
        </div>
        <img src={trophy} alt="Trophy" className="trophy" />
      </div>
    </div>
  );
}

export default DevelopmentSteps;
