// import { useState } from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

import "./styles/global.css";

function App() {
  return (
    <body>
      <div className="page">
        <Header></Header>
        <main>
          <h2>Experience</h2>
          <hr />
          <Experience></Experience>
          <Experience></Experience>
          <Experience></Experience>
          <h2>Education</h2>
          <hr />
          <Education></Education>
        </main>
      </div>
    </body>
  );
}

export default App;
