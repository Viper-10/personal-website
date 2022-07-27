import { useState, useRef } from "react";
import { navigationItems } from "../navigationItems";
import "./style.css";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex-between mobile-nav-container">
        <div className="logo">PRIYADHARSHAN</div>
        <div className="mobilebaricon" onClick={openNavbar}>
          <i className="fa  fa-bars" />
          {isOpen && (
            <div ref={dropdown} className="dropdown">
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
