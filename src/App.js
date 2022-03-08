import SpeedDials from "./Components/SpeedDials";
import SocialIcons from "./Components/SocialIcons";
import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation";
function App() {
  return (
    <div className="App">
      <div className="context">
        <div className="container">
          <h1 className="mt-2 mb-1">Hey, I'm Priyadharshan</h1>
          <p className="mb-2">a web developer </p>
          <p>Swipe to know more about me! </p>
          <SocialIcons />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
