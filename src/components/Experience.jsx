import { useState } from "react";
import "../styles/experience.css";

export function Experience({ editable }) {
  const [companyName, setCompanyName] = useState("");

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  return (
    <>
      <div className="left-and-right-justify">
        <div className="h3-container">
          {editable ? (
            <input
              placeholder="Company Name"
              value={companyName}
              onChange={handleCompanyNameChange}
            ></input>
          ) : (
            <h3>{companyName}</h3>
          )}
        </div>
        <div>Month Year - Month Year</div>
      </div>
      <div className="left-and-right-justify">
        <div>Job</div>
        <div>Job Location</div>
      </div>
      <ul>
        <li>Strong sentence describing what was done</li>
        <li>Strong sentence describing what was done</li>
        <li>Strong sentence describing what was done</li>
        <li>Strong sentence describing what was done</li>
      </ul>
    </>
  );
}
