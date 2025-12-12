import { useState } from "react";
import "../styles/education.css";

export function Education({ editable }) {
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  function handleChange(e, element) {
    if (element === "schoolName") {
      setSchoolName(e.target.value);
    } else if (element === "schoolLocation") {
      setSchoolLocation(e.target.value);
    } else if (element === "degree") {
      setDegree(e.target.value);
    } else if (element === "completionDate") {
      setCompletionDate(e.target.value);
    }
  }
  return (
    <>
      {editable ? (
        <>
          <div className="left-and-right-justify">
            <div className="h3-container">
              <input
                placeholder="School Name"
                value={schoolName}
                onChange={(e) => handleChange(e, "schoolName")}
              ></input>
            </div>
            <input
              className="right-justify-text"
              placeholder="School's Location (ex. Philadelphia)"
              value={schoolLocation}
              onChange={(e) => handleChange(e, "schoolLocation")}
            ></input>
          </div>
          <div className="left-and-right-justify">
            <input
              placeholder="Degree"
              value={degree}
              onChange={(e) => handleChange(e, "degree")}
            ></input>
            <input
              className="right-justify-text"
              placeholder="Completion Date (Month YYYY)"
              value={completionDate}
              onChange={(e) => handleChange(e, "completionDate")}
            ></input>
          </div>
        </>
      ) : (
        <>
          <div className="left-and-right-justify">
            <h3>{schoolName}</h3>
            <div>{schoolLocation}</div>
          </div>
          <div className="left-and-right-justify">
            <div>{degree}</div>
            <div>{completionDate}</div>
          </div>
        </>
      )}
    </>
  );
}
