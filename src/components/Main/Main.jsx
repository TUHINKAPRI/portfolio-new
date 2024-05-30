import React from "react";

const Education = React.lazy(() => import("./Education"));
const AboutMe = React.lazy(() => import("./AboutMe"));
const Contact = React.lazy(() => import("./Contact"));
const Projects = React.lazy(() => import("./Projects"));
const Technology = React.lazy(() => import("./Technology"));
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
