import { useState } from "react";
import "../styles/skills.css";

export function Skills({ editable }) {
  // const [projectTitle, setProjectTitle] = useState("");
  // const [projectDates, setProjectDates] = useState("");
  // const [projectDescriptions, setProjectDescriptions] = useState([""]);

  // function handleChange(e, element) {
  //   if (element === "projectTitle") {
  //     setProjectTitle(e.target.value);
  //   } else if (element === "projectDates") {
  //     setProjectDates(e.target.value);
  //   }
  // }

  return (
    <>
      <div className="skill-line">
        <h3>Languages: </h3>
        <div>red, blue, green</div>
      </div>
      <h3>Frameworks & Libraries: </h3>
      <h3>Tools & Platforms: </h3>
    </>
  );
}
