import "./style.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const navItems = document.getElementsByClassName("nav-item");

      if (window.scrollY < 36) {
        navbar.style.backgroundColor = "transparent";
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].classList.add("black-on-hover");
          navItems[i].style.borderBottomColor = "black";
        }
      } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0.85)";
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].style.borderBottomColor = "#4dfed1";
          navItems[i].classList.remove("black-on-hover");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          PRIYADHARSHAN
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#timeline" className="link">
              Timeline
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#TechStack" className="link">
              Stack
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="link">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
