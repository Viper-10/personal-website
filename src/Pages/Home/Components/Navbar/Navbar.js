import "./style.css";
import { useMediaQuery } from "./../../../../hooks/useMediaQuery";
import LaptopView from "./LaptopView";
import MobileView from "./MobileView";

const Navbar = () => {
  const isMobile = useMediaQuery("600");

  return isMobile ? <MobileView /> : <LaptopView />;
};

export default Navbar;
