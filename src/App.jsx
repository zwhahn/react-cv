// import { useState } from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import "./styles/global.css";
import { useState } from "react";

function App() {
  const [editable, setEditable] = useState(false);
  const [experiences, setExperiences] = useState([null]);
  const [educations, setEducations] = useState([null]);
  const [projects, setProjects] = useState([null]);
  const [skills, setSkills] = useState([null]);

  function handleEditClick() {
    setEditable(!editable);
  }

  function handleAddElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences, null]);
    } else if (element === "educations") {
      setEducations([...educations, null]);
    } else if (element === "projects") {
      setProjects([...projects, null]);
    } else if (element === "skills") {
      setSkills([...skills, null]);
    }
  }

  function handleRemoveElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences].slice(0, -1));
    } else if (element === "educations") {
      setEducations([...educations].slice(0, -1));
    } else if (element === "projects") {
      setProjects([...projects].slice(0, -1));
    } else if (element === "skills") {
      setSkills([...skills].slice(0, -1));
    }
  }

  return (
    <>
      <button id="edit-btn" onClick={handleEditClick}>
        {editable ? "Save" : "Edit"}
      </button>
      <div className="page">
        <Header editable={editable}></Header>
        <main>
          <div className="section-title">
            <h2>EXPERIENCE</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("experiences")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("experiences")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {experiences.map((exp, i) => {
            return <Experience key={i} editable={editable}></Experience>;
          })}
          <div className="section-title">
            <h2>EDUCATION</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("educations")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("educations")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {educations.map((exp, i) => {
            return <Education key={i} editable={editable}></Education>;
          })}
          <div className="section-title">
            <h2>PROJECTS</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("projects")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("projects")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {projects.map((exp, i) => {
            return <Projects key={i} editable={editable}></Projects>;
          })}
          <div className="section-title">
            <h2>SKILLS</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("skills")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("skills")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {skills.map((exp, i) => {
            return <Skills key={i} editable={editable}></Skills>;
          })}
        </main>
      </div>
    </>
  );
}

export default App;
