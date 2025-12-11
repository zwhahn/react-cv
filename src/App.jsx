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
  const [educations, setEducations] = useState([null]);

  function handleEditClick() {
    setEditable(!editable);
  }

  function handleAddElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences, null]);
    } else if (element === "educations") {
      setEducations([...educations, null]);
    }
  }

  function handleRemoveElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences].slice(0, -1));
    } else if (element === "educations") {
      setEducations([...educations].slice(0, -1));
    }
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
                <button onClick={() => handleAddElementClick("experiences")}>
                  Add
                </button>
                <button onClick={() => handleRemoveElementClick("experiences")}>
                  Remove
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <hr />
          {experiences.map((exp, i) => {
            return <Experience key={i} editable={editable}></Experience>;
          })}
          <div className="section-title">
            <h2>Education</h2>
            {editable ? (
              <>
                <button onClick={() => handleAddElementClick("educations")}>
                  Add
                </button>
                <button onClick={() => handleRemoveElementClick("educations")}>
                  Remove
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <hr />
          {educations.map((exp, i) => {
            return <Education key={i} editable={editable}></Education>;
          })}
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
