import Technology from "./Technology";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";

function Main() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-9">
        <Technology />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
}

export default Main;
