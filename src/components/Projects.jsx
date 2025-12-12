import { useState } from "react";

export function Projects({ editable }) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDates, setProjectDates] = useState("");
  const [projectDescriptions, setProjectDescriptions] = useState([""]);

  function handleChange(e, element) {
    if (element === "projectTitle") {
      setProjectTitle(e.target.value);
    } else if (element === "projectDates") {
      setProjectDates(e.target.value);
    }
  }

  function handleBulletChange(e, index) {
    const newBullets = [...projectDescriptions];
    newBullets[index] = e.target.value;

    let trimmed = newBullets.filter((bullet) => bullet.trim() != "");
    trimmed.push("");

    setProjectDescriptions(trimmed);
  }

  return (
    <>
      {editable ? (
        <>
          <div className="left-and-right-justify">
            <input
              placeholder="Project Title"
              value={projectTitle}
              onChange={(e) => handleChange(e, "projectTitle")}
            ></input>
            <input
              className="right-justify-text"
              placeholder="Month YYYY - Month YYYY"
              value={projectDates}
              onChange={(e) => handleChange(e, "projectDates")}
            ></input>
          </div>
          <ul>
            {projectDescriptions.map((bullet, index) => (
              <li key={index}>
                <input
                  className="bullet-input"
                  placeholder="Project Description"
                  value={bullet}
                  onChange={(e) => handleBulletChange(e, index)}
                ></input>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="left-and-right-justify">
            <h3>{projectTitle}</h3>
            <div>{projectDates}</div>
          </div>
          <ul>
            {projectDescriptions.map((bullet, index) =>
              bullet != "" ? <li key={index}>{bullet}</li> : <></>,
            )}
          </ul>
        </>
      )}
    </>
  );
}
