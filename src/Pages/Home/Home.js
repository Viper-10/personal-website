import About from "./Components/About/About";
import SocialProfile from "./Components/Social Profile/SocialProfile";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <About />
      <Skills />
      <WorkExperience />
      <Education />

      <SocialProfile />
    </>
  );
};

export default Home;
