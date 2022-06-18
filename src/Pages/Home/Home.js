import About from "./Components/About/About";
import SocialProfile from "./Components/Social Profile/SocialProfile";
import Skills from "./Components/Skills/Skills";
import Timeline from "./Components/Timeline/Timeline";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
const Home = () => {
  return (
    <>
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Languages />
      <SocialProfile />
    </>
  );
};

export default Home;
