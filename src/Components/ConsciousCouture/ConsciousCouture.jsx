import React from 'react';
import './ConsciousCouture.scss';
import Card1 from '../../assets/Card.png'
import Background from '../../assets/Background.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png';
const ConsciousCouture = () => {
  return (
    <section className="conscious-couture">
      {/* Banner Section */}
      <div className="banner">
        <img src={Background} alt="Fashion Model" className="banner-image" />
        <div className="banner-content">
          <h2>Conscious Couture</h2>
          <p>Fashion with a conscience. We upcycle and recycle to create stylish, sustainable clothing.</p>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="accessories-grid">
        <div>
        <div className="grid-item">
          <img src={pic1} alt="Accessory 1" />
        </div>
        <div className="grid-item">
          <img src={pic2} />
        </div>
        </div>
        <div className="grid-item large">
          <img src={pic3} alt="Accessory Large" />
          <div className="text-overlay">
            <p style={{fontSize:"0.8rem",marginBottom:"0px"}}>FIND THE BEST ACCESSORIES PIECE FOR ANY OCCASION</p>
            <h3 style={{margin:"10px 0px 0px 0px"}}>Timeless Accessories Crafted With Love!</h3>
            <p>
              Each piece of accessories is handmade in our production workshops where we maintain close relationships 
              with our manufacturers to keep the process sustainable and transparent.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ConsciousCouture;
