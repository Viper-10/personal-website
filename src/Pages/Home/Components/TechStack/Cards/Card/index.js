import { ReactComponent as GithubLogo } from "../../../../../../assets/images/github.svg";
import { ReactComponent as ReactLogo } from "../../../../../../assets/images/react.svg";
import { ReactComponent as JavaLogo } from "../../../../../../assets/images/java.svg";
import "./style.css";
export function getIcon(title) {
  const style = {
    height: "100px",
    width: "200px",
    color: "#4dfed1",
  };

  switch (title) {
    case "Frontend":
      return <ReactLogo {...style} className="glow" />;
    case "Backend":
      return <JavaLogo {...style} className="glow" />;
    case "Github":
      return <GithubLogo {...style} className="glow" />;
    default:
      return null;
  }
}

export { default as Card } from "./Card";
