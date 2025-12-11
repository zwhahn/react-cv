import { useState } from "react";
import "../styles/experience.css";

export function Experience({ editable }) {
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }
  function handleJobChange(e) {
    setJobTitle(e.target.value);
  }
  function handleJobLocationChange(e) {
    setJobLocation(e.target.value);
  }

  return (
    <>
      {editable ? (
        <>
          <div className="left-and-right-justify">
            <div className="h3-container">
              <input
                placeholder="Company Name"
                value={companyName}
                onChange={handleCompanyNameChange}
              ></input>
            </div>
            <input
              placeholder="Month YYYY - Month YYYY"
              value={startDate}
              onChange={handleStartDateChange}
            ></input>
          </div>
          <div className="left-and-right-justify">
            <input
              placeholder="Job"
              value={jobTitle}
              onChange={handleJobChange}
            ></input>
            <input
              placeholder="Job Location"
              value={jobLocation}
              onChange={handleJobLocationChange}
            ></input>
          </div>
          <ul>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
          </ul>
        </>
      ) : (
        <>
          <div className="left-and-right-justify">
            <div className="h3-container">
              <h3>{companyName}</h3>
            </div>
            <div>{startDate}</div>
          </div>
          <div className="left-and-right-justify">
            <div>{jobTitle}</div>
            <div>{jobLocation}</div>
          </div>
          <ul>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
            <li>Strong sentence describing what was done</li>
          </ul>
        </>
      )}
    </>
  );
}
