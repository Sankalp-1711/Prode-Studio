import React from 'react';
import './Hero.scss';
import { CiHeart } from "react-icons/ci";
import { PiBagSimpleThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="brand-name">
            <span>Pritam Nayak </span>
            <br/>
            <span>Couture</span>
            </div>
            <div style={{width:"100%"}}> 
        <ul className="nav-links">
            <div>
            <CiSearch />
                Search...
            </div>
            <div>
           
          <li><a href="#">New In</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Runway</a></li>
          <li><a href="#">Vows</a></li>
          <li><a href="#">About</a></li>
            </div>
            <div>
            <CiHeart />
            <PiBagSimpleThin />
            <CiUser />
            </div>
         
        </ul>
        </div>
      </nav>
      <div className="hero-section">
        <div className="overlay">
          <h1 className="heading">
            Don’t Just Buy Outfit, <br /> Buy an Identity
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;