import { navigationItems } from "../navigationItems";
import "./style.css";
const MobileView = () => {
  return (
    <nav>
      <div className="flex-between mobile-nav-container">
        <div className="logo">PRIYADHARSHAN</div>
        <div className="mobilebaricon">
          <i className="fa fa-bars" />
        </div>
      </div>
    </nav>
  );
};

export default MobileView;
