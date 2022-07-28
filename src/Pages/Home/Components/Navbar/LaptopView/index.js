import { useEffect } from "react";
import "./style.css";
import { navigationItems } from "../navigationItems";

const LaptopView = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY < 36) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.4)";
      } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0.875)";
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
