import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation.js";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import SocialProfile from "./Components/Social Profile/SocialProfile";
function App() {
  return (
    <div className="App">
      <div className="context">
        <div className="container">
          <Navbar />
          <Introduction />
          <SocialProfile />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
