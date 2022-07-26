import { useEffect } from "react";
import "./style.css";
import { navigationItems } from "../navigationItems";

const LaptopView = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const navItems = document.getElementsByClassName("nav-item");

      if (window.scrollY < 36) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.4)";
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].classList.add("black-on-hover");
          navItems[i].style.borderBottomColor = "black";
        }
      } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0.875)";
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
          {navigationItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <a href={item.link} className="link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LaptopView;
