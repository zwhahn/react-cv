import { useState } from "react";
import "../styles/skills.css";

export function Skills({
  editable,
  initialData = {
    id: "",
    skillTitle: "",
    skillItems: "",
  },
}) {
  const [skillTitle, setSkillTitle] = useState(initialData.skillTitle);
  const [skillItems, setSkillItems] = useState(initialData.skillItems);

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
            <div className="h3-container">
              <input
                placeholder="Languages"
                value={skillTitle}
                onChange={(e) => handleChange(e, "skillType")}
              />
              :
            </div>
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
            <div className="h3-container">
              <h3>{skillTitle + ": "}</h3>
            </div>
            <div>{skillItems}</div>
          </div>
        </>
      )}
    </>
  );
}
