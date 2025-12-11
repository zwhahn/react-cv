import { useState } from "react";
import "../styles/header.css";

export function Header({ editable }) {
  const links = [
    "Github",
    "LinkedIn",
    "Portfolio",
    "Email",
    "Phone Number",
    "City",
  ];

  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");

  function handleChange(e, element) {
    if (element === "name") {
      setName(e.target.value);
    } else if (element === "summary") {
      setSummary(e.target.value);
    }
  }

  return (
    <header>
      {editable ? (
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        ></input>
      ) : (
        <h1>{name}</h1>
      )}
      <ul>
        {links.map((link) => {
          return (
            <li>
              <a href="url">{link}</a>
            </li>
          );
        })}
      </ul>
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
