import React from "react";
import {motion} from "framer-motion";

const Header = () => {
  return (
    <motion.div className="header"
    initial={{ opacity: 0, y: -180}}
    animate={{ opacity: 1, y: 0}}
    transition={{ ease: "easeInOut", duration: 1, delay: .6}}>
      <div className="header-inner">
        <div className="logo">gaze.</div>
        <nav className="nav">
          <li>
            <a href="/design">Men</a>
          </li>
          <li>
            <a href="/strategy">Women</a>
          </li>
          <li>
            <a href="/cases">Trending Collection</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Shopping Cart</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
