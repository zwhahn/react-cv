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

  function handleEditClick() {
    setEditable(!editable);
  }

  return (
    <>
      <button onClick={handleEditClick}>{editable ? "Save" : "Edit"}</button>
      <div className="page">
        <Header></Header>
        <main>
          <h2>Experience</h2>
          <hr />
          <Experience editable={editable}></Experience>
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
