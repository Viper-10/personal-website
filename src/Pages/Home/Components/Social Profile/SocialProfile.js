import { useState } from "react";
import Icon from "./Icon";
import profiles from "./profiles.json";
import "./style.css";
import { useMediaQuery } from "./../../../../hooks/useMediaQuery";
const SocialProfile = () => {
  const isMobile = useMediaQuery("1024");
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  let hoverIconStyle;

  const allIcons = profiles.map((iconInfo, index) => {
    return <Icon key={index} faIcon={iconInfo.faIcon} url={iconInfo.url} />;
  });

  const onClichHoverIcon = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  if (showSocialIcons) {
    hoverIconStyle = "fa fa-plus rotate-45";
  } else {
    hoverIconStyle = "fa fa-plus";
  }

  const hoverIcon = (
    <div className="icon mb-1" id="hover-icon">
      <i className={hoverIconStyle} onClick={onClichHoverIcon} />
    </div>
  );

  return (
    <div className="social-icon-container">
      {isMobile && hoverIcon}
      {(!isMobile || showSocialIcons) && allIcons}
    </div>
  );
};

export default SocialProfile;
