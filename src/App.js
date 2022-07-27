import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation.js";
import Home from "./Pages/Home/Home";
import "./App.css";
import Navbar from "./Pages/Home/Components/Navbar/Navbar.js";

const App = () => {
  return (
    <div className="App">
      <div className="context">
        <Navbar />
        <div className="container">
          <Home />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
};

export default App;
