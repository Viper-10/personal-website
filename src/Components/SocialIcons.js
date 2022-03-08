import Icon from "./Icon";
import profiles from "../profiles.json";
import { useEffect, useState } from "react";

const SocialIcons = () => {
  const [profileList, setProfileList] = useState([profiles]);

  const allIcons = profiles.map((iconInfo, index) => (
    <Icon key={iconInfo.index} faIcon={iconInfo.faIcon} url={iconInfo.url} />
  ));

  return <div className="social-icon-container mt-1">{allIcons}</div>;
};

export default SocialIcons;
