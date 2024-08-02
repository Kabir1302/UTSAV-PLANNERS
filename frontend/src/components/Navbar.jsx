import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">UTSAV PLANNERS</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" >
            HOME
          </Link>
          <Link to="services" >
            OUR SERVICES
          </Link>
          <Link to="about" >
            ABOUT US
          </Link>
          <Link to="contact" >
            CONTACT US
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;