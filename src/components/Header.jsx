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
          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          ></input>
          <ul>
            {linkArray.map((link, index) => (
              <li key={index}>
                <input
                  placeholder="Link"
                  value={link.type}
                  onChange={(e) => handleLinkChange(e, index, "type")}
                ></input>
                <input
                  placeholder="Link"
                  value={link.value}
                  onChange={(e) => handleLinkChange(e, index, "link")}
                ></input>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <ul>
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
      {editable ? (
        <input
          placeholder="I am a software engineer with 3 years of experience..."
          value={summary}
          onChange={(e) => handleChange(e, "summary")}
        ></input>
      ) : (
        <p>{summary}</p>
      )}
    </header>
  );
}
