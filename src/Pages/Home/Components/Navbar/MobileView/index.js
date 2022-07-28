import { useState, useRef, useEffect } from "react";
import { navigationItems } from "../navigationItems";
import "./style.css";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    function handleOutsideClick(e) {
      // TODO: complete this and add transition to dropdown
    }

    function handleScroll() {
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
    }
  }, []);
  return (
    <nav className="navbar">
      <div className="flex-between mobile-nav-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          PRIYADHARSHAN
        </div>
        <div
          className="mobilebaricon"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <i className="fa  fa-bars" />
          {isOpen && (
            <div ref={ref} className="dropdown">
              <ul>
                {navigationItems.map((item) => (
                  <a
                    href={item.link}
                    key={item.name}
                    className="mobile-nav-link"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileView;
