import React from 'react';
import './Content.scss';
import { useImageSize } from 'react-image-size';
import Frame1 from '../../assets/Frame43.png';
import Frame2 from '../../assets/Frame44.png';
import Frame3 from '../../assets/Frame45.png';
import Frame4 from '../../assets/Frame46.png';
import Hero from '../../assets/Hero.png'

const Content = () => {

  async function fetchImageSize() {
    try {
        const dimensions = await getImageSize({Hero});
        console.log(dimensions);
    } catch (error) {
        console.error(error);
    }
}
  return (
    <div className="layout">
      
      {/* Appointment Section */}
      <section  className="appointment-section">
        <div className="appointment-content">
          <h2 font-family = "Urbanist">Make an Appointment</h2>
          <h3>Get Recommendations from a personal stylist</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Book an Appointment</button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3>Here We About From</h3>
        <h2>Happy Folks</h2>
        <div className="rating">★★★★★</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor libero et diam interdum posuere.
        </p>
        <p className="testimonial-author">— UR RIYA</p>
      </section>

      {/* Follow Us Section */}
      <section className="follow-us-section">
        <h3>Follow Us</h3>
        <div className="gallery">
          <img src={Frame1} alt="Gallery 1" />
          <img src={Frame2} alt="Gallery 2" />
          <img src={Frame3} alt="Gallery 3" />
          <img src={Frame4} alt="Gallery 4" />
        </div>
      </section>
    </div>
  );
};

export default Content;
