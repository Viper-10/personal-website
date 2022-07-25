import { ReactComponent as GithubLogo } from "../../../../../../assets/images/github.svg";
import { ReactComponent as ReactLogo } from "../../../../../../assets/images/react.svg";
import { ReactComponent as JavaLogo } from "../../../../../../assets/images/java.svg";

export function getIcon(title) {
  const style = {
    height: "100px",
    width: "200px",
    color: "#4dfed1",
  };

  switch (title) {
    case "Frontend":
      return <ReactLogo {...style} />;
    case "Backend":
      return <JavaLogo {...style} />;
    case "Github":
      return <GithubLogo {...style} />;
    default:
      return null;
  }
}

export { default as Card } from "./Card";
