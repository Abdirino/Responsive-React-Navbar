import React from "react";
import "./navbar.css";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Miranda</h2>
      </div>

      <div className="navbar">
        <ul className="navMenu">
          <li className="navItem">
            <a href="#" className="NavLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#about" className="NavLink">
              About
            </a>
          </li>
          <li className="navItem">
            <a href="#services" className="NavLink">
              Services
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="NavLink">
              Contact
            </a>
          </li>
        </ul>

        <div className="closeNavbarIcon">
          <AiFillCloseCircle />
        </div>
      </div>

      <div className="toggleNavbarIcon">
        <AiOutlineMenu className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
