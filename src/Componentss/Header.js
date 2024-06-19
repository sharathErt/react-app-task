import React from 'react';
import './Header.css';

import image1 from "../assets/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={image1} width={190} height={65} alt='logo' />
        <img src='https://www.10000coders.co/assets/10000coders-logo.png?v=1.2' width={190} height={65} alt='logo' />

        <span className='inspiration-regular'>Ik developers</span>
      </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>How it Works</li>
          <li>Hire</li>
        </ul>
      </nav>
      <button>Contact us</button>
    </header>
  );
};

export default Header;
