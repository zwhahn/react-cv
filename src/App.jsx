// import { useState } from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import "./styles/global.css";
import { useState } from "react";

function App() {
  const [editable, setEditable] = useState(true);
  const [experiences, setExperiences] = useState([null]);

  function handleEditClick() {
    setEditable(!editable);
  }

  function handleAddExperienceClick() {
    setExperiences([...experiences, null]);
  }

  function handleRemoveExperienceClick() {
    setExperiences([...experiences].slice(0, -1));
  }

  return (
    <>
      <button onClick={handleEditClick}>{editable ? "Save" : "Edit"}</button>
      <div className="page">
        <Header></Header>
        <main>
          <div className="section-title">
            <h2>Experience</h2>
            {editable ? (
              <>
                <button onClick={handleAddExperienceClick}>Add</button>
                <button onClick={handleRemoveExperienceClick}>Remove</button>
              </>
            ) : (
              <></>
            )}
          </div>
          <hr />
          {experiences.map((exp, i) => {
            return <Experience key={i} editable={editable}></Experience>;
          })}
          <h2>Education</h2>
          <hr />
          <Education></Education>
          <h2>Projects</h2>
          <hr />
          <Projects></Projects>
          <Projects></Projects>
          <h2>Skills</h2>
          <hr />
          <Skills></Skills>
        </main>
      </div>
    </>
  );
}

export default App;
