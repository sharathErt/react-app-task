// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-section">
//         <div className="footer-brand">
//           <img src="path_to_logo" alt="Logo" className="footer-logo" />
//           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <div className="footer-badges">
//             <img src="path_to_google_pagespeed_logo" alt="Google Pagespeed" />
//             <img src="path_to_other_badge" alt="Other Badge" />
//           </div>
//         </div>
//       </div>
//       <div className="footer-section">
//         <h4>Links</h4>
//         <ul>
//           <li><a href="/about">About Us</a></li>
//           <li><a href="/services">Services</a></li>
//           <li><a href="/case-studies">Case Studies</a></li>
//           <li><a href="/how-it-works">How it works</a></li>
//           <li><a href="/blog">Blog</a></li>
//           <li><a href="/careers">Careers</a></li>
//           <li><a href="/areas-we-serve">Areas We Serve</a></li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h4>Contact us</h4>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//         <p>+923183561921</p>
//         <div className="footer-social">
//           <a href="facebook_link"><i className="fab fa-facebook-f"></i></a>
//           <a href="instagram_link"><i className="fab fa-instagram"></i></a>
//           <a href="twitter_link"><i className="fab fa-twitter"></i></a>
//           <a href="linkedin_link"><i className="fab fa-linkedin-in"></i></a>
//         </div>
//       </div>
//       <div className="footer-copyright">
//         <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import './Footer.css';
// import googlePageSpeed from '../assets/images/google-img.png'; 

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-section about">
//                     <img src="path-to-logo" alt="Company Logo" className="logo" /> 
//                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                     <img src={googlePageSpeed} alt="Google PageSpeed" className="google-pagespeed" />
//                 </div>
//                 <div className="footer-section links">
//                     <h2>Links</h2>
//                     <ul>
//                         <li>About Us</li>
//                         <li>Services</li>
//                         <li>Case Studies</li>
//                         <li>How it works</li>
//                         <li>Blog</li>
//                         <li>Careers</li>
//                         <li>Areas We Serve</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section contact">
//                     <h2>Contact us</h2>
//                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                     <p>+923183561921</p>
//                     <div className="social-icons">
//                         <i className="fab fa-facebook"></i>
//                         <i className="fab fa-instagram"></i>
//                         <i className="fab fa-twitter"></i>
//                         <i className="fab fa-linkedin"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


import React from 'react';
import './Footer.css';
import googlePageSpeed from '../assets/images/google-img.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import image1 from "../assets/images/logo.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    {/* <img src="path-to-logo" alt="Company Logo" className="logo" />  */}
                    <div className="logo" style={{margin:"auto",marginTop:"5px"}}>
                        <img src={image1} width={190} height={65}  ></img>
                        <span className='inspiration-regular' style={{}}>Ik developers</span>
                    </div>
                    <br></br>
                    <p>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
                    <img src={googlePageSpeed} alt="Google PageSpeed" className="google-pagespeed" />
                    {/* <img src="path-to-google-pagespeed-image" alt="Google PageSpeed" className="google-pagespeed" />  */}
                </div>
                <div className="footer-section links">
                    <h2 style={{fontWeight:"bold"}}>Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>How it works</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Areas We Serve</li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2 style={{fontWeight:"bold"}}>Contact us</h2>
                    <p>Lorem Ipsum is simply dummy text <br></br>of the printing and typesetting <br></br>industry.</p>
                    <p>+923183561921</p>
                    
                </div>
                <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
