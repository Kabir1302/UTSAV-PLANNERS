import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="mainsection">
      <img src="/background1.jpg" alt="background" />
      <div className="item">
        <h3>Connect with us and make your event unforgettable.</h3>
        
        <div>
          
          <Link to="contact" >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;