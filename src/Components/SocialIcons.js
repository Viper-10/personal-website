import { useEffect, useState } from "react";
import Icon from "./Icon";
import profiles from "../profiles.json";

const SocialIcons = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);
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
    setVisible(!visible);
  };
  const hoverIcon = (
    <div className="icon mb-1" id="hover-icon">
      <i className="fa fa-plus" onClick={onClickHoverIcon} />
    </div>
  );

  return (
    <div className="device-filter">
      <div className="social-icon-container mt-1">
        {windowWidth < 900 && hoverIcon}
        {(windowWidth >= 900 || visible) && allIcons}
      </div>
    </div>
  );
};

export default SocialIcons;
