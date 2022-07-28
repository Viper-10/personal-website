import { useState, useRef, useEffect } from "react";
import { navigationItems } from "../navigationItems";
import "./style.css";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileBarIconRef = useRef();

  const dropdownClass = isOpen ? "dropdown open" : "dropdown";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    function handleOutsideClick(e) {
      if (mobileBarIconRef.current.contains(e.target)) {
        return;
      }
      if (dropdownRef.current.contains(e.target)) {
        setIsOpen(true);
        return;
      }
      setIsOpen(false);
    }

    function handleScroll() {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY < 36) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.4)";
      } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0.875)";
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex-between mobile-nav-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          PRIYADHARSHAN
        </div>
        <div className="mobilebaricon">
          <i
            className="fa  fa-bars"
            onClick={toggleDropdown}
            ref={mobileBarIconRef}
          />

          <div ref={dropdownRef} className={dropdownClass}>
            <ul>
              {navigationItems.map((item) => (
                <a href={item.link} key={item.name} className="mobile-nav-link">
                  {item.name}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileView;
