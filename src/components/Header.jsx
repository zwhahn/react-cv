import { useState } from "react";
import "../styles/header.css";

export function Header({ editable }) {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [linkArray, setLinkArray] = useState([
    {
      type: "",
      value: "",
      isLink: false,
    },
  ]);

  function handleChange(e, element) {
    if (element === "name") {
      setName(e.target.value);
    } else if (element === "summary") {
      setSummary(e.target.value);
    }
  }

  function handleLinkChange(e, index, dataField) {
    const newLinks = [...linkArray];
    if (dataField === "type") {
      newLinks[index].type = e.target.value;
    } else if (dataField === "link") {
      newLinks[index].value = e.target.value;
    }

    if (newLinks[index].value !== "") {
      newLinks[index].isLink = true;
    }

    let trimmed = newLinks.filter((link) => link.type.trim() != "");
    trimmed.push({ type: "", value: "", isLink: false });

    setLinkArray(trimmed);
  }

  return (
    <header>
      {editable ? (
        <>
          <div className="h1-container">
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleChange(e, "name")}
            ></input>
          </div>
          <ul>
            {linkArray.map((link, index) => (
              <li key={index} className="link-input-container">
                <input
                  placeholder="Link (ex. Github)"
                  value={link.type}
                  onChange={(e) => handleLinkChange(e, index, "type")}
                ></input>
                <input
                  placeholder="url"
                  value={link.value}
                  onChange={(e) => handleLinkChange(e, index, "link")}
                ></input>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="h1-container">
            <h1 id="header-name">{name}</h1>
          </div>
          <ul className="small-font">
            {linkArray.map((link, index) =>
              link.isLink ? (
                <li key={index}>
                  <a href={link.value}>{link.type}</a>
                </li>
              ) : (
                <li key={index}>{link.type}</li>
              ),
            )}
          </ul>
        </>
      )}
      <div className="personal-summary small-font">
        {editable ? (
          <input
            className="bullet-input"
            placeholder="I am a software engineer with 3 years of experience..."
            value={summary}
            onChange={(e) => handleChange(e, "summary")}
          ></input>
        ) : (
          <p>{summary}</p>
        )}
      </div>
    </header>
  );
}
