import { useEffect, useState } from "react";
import Icon from "./Icon";
import profiles from "../../../../profiles.json";
import "./style.css";
const SocialProfile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [socialIconsVisible, setSocialIconsVisible] = useState(false);

  let hoverIconStyle;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // whenever the page resizes the event listener is run
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const allIcons = profiles.map((iconInfo, index) => {
    return <Icon key={index} faIcon={iconInfo.faIcon} url={iconInfo.url} />;
  });

  const onClickHoverIcon = () => {
    setSocialIconsVisible(!socialIconsVisible);
  };

  if (socialIconsVisible) {
    hoverIconStyle = "fa fa-plus rotate-45";
  } else {
    hoverIconStyle = "fa fa-plus";
  }

  const hoverIcon = (
    <div className="icon mb-1" id="hover-icon">
      <i className={hoverIconStyle} onClick={onClickHoverIcon} />
    </div>
  );

  return (
    <div className="social-icon-container">
      {windowWidth < 1024 && hoverIcon}
      {(windowWidth >= 1024 || socialIconsVisible) && allIcons}
    </div>
  );
};

export default SocialProfile;
