import React from 'react';
import './Content.scss';
import { useImageSize } from 'react-image-size';
const Content = () => {

  async function fetchImageSize() {
    try {
        const dimensions = await getImageSize('Hero.png');
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
          <img src="Frame 43.png" alt="Gallery 1" />
          <img src="Frame 44.png" alt="Gallery 2" />
          <img src="Frame 45.png" alt="Gallery 3" />
          <img src="Frame 46.png" alt="Gallery 4" />
        </div>
      </section>
    </div>
  );
};

export default Content;
