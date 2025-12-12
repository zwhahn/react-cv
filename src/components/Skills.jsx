import { useState } from "react";
import "../styles/skills.css";

export function Skills({ editable }) {
  const [skillTitle, setSkillTitle] = useState("");
  const [skillItems, setSkillItems] = useState("");

  function handleChange(e, element) {
    if (element === "skillType") {
      setSkillTitle(e.target.value);
    } else if (element === "skillItems") {
      setSkillItems(e.target.value);
    }
  }

  return (
    <>
      {editable ? (
        <>
          <div className="skill-line">
            <input
              placeholder="Languages"
              value={skillTitle}
              onChange={(e) => handleChange(e, "skillType")}
            />
            <input
              placeholder="React, JavaScript, SQL, Python"
              value={skillItems}
              onChange={(e) => handleChange(e, "skillItems")}
            />
          </div>
        </>
      ) : (
        <>
          <div className="skill-line">
            <h3>{skillTitle}</h3>
            <div>{skillItems}</div>
          </div>
        </>
      )}
    </>
  );
}
