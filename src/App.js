import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation.js";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="context">
        <div className="container">
          <Home />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
