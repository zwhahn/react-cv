// import { useState } from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import "./styles/global.css";
import { useState } from "react";

function App() {
  const initialExperiences = [
    {
      companyName: "PA Consulting",
      startDate: "September 2022 - October 2025",
      jobTitle: "Mechanical Engineer / Software Engineer",
      jobLocation: "San Francisco, CA",
      jobDescriptions: [
        "Contributed to all phases of the product development life cycle, from concept ideation and prototyping to production, for clients in industries including medical devices, consumer electronics, and food manufacturing",
        "Built and deployed a Python-based data transfer system to migrate all project data from legacy software, leveraging data acquisition APIs to streamline information flow and improve reliability",
        "Designed and programmed an autonomous robot using ROS2 and OpenCV on a Linux-based Raspberry Pi, enabling simultaneous localization and mapping (SLAM) and real-time object detection",
        "Led engineering development of an automated in-store delivery system, developing multiple proof-of-concept prototypes to evaluate UX and technical trade-offs, and delivering the alpha design for client review",
      ],
    },
    {
      companyName: "NASA Jet Propulsion Laboratory",
      startDate: "June 2021 - November 2021",
      jobTitle: "Robotics Co-op",
      jobLocation: "Remote",
      jobDescriptions: [
        "Assessed the proposed Mars Rover Sample Transfer System (STS) for reliability and complexity improvements, presenting viability assessments and recommendations to chief engineers",
        " Updated the Mars Rover STS model to be flexible in both NASA design softwares, enabling easier and faster system manipulation for future investigations",
      ],
    },
    {
      companyName: "University of Pennslvania",
      startDate: "January 2021 - November 2022",
      jobTitle: "Graduate Teaching Assistant",
      jobLocation: "Philadelphia, PA",
      jobDescriptions: [
        "Led labs, managed student projects, and developed course materials for Integrated Computer-Aided Design",
      ],
    },
  ];

  const emptyExperience = {
    companyName: "",
    startDate: "",
    jobTitle: "",
    jobLocation: "",
    jobDescriptions: [""],
  };

  const initialEducation = [
    {
      schoolName: "University of Pennsylvania",
      schoolLocation: "Philadelphia, PA",
      degree: "Bachelor of Science in Mechanical Engineering",
      completionDate: "May 2021",
    },
    {
      schoolName: "University of Pennsylvania",
      schoolLocation: "Philadelphia, PA",
      degree: "Master of Science in Robotics",
      completionDate: "May 2022",
    },
  ];

  const emptyEducation = {
    schoolName: "",
    schoolLocation: "",
    degree: "",
    completionDate: "",
  };

  const initialProject = [
    {
      projectTitle: "WildcardWendsday.com",
      projectDates: "January 2025 - Present",
      projectDescriptions: [
        "Developed full-stack web application to randomly select nearby restaurants for team outings using HTML, JavaScript, and CSS with Tailwind CSS and daisyUI for resopnsive UI design",
        "Integrated Google Maps Places API to query nearby restaurants with configurable search radius",
        "Deployed serverless backend on Netlify",
      ],
    },
    {
      projectTitle: "Paint-By-Number Generator",
      projectDates: "December 2023 - June 2024",
      projectDescriptions: [
        "Built Python application that converts images into paint-by-number templates, using OpenCV for image processing",
        'Designed interactive Tkinter-based GUI integrating live camera feed and USB printer drivers to create "photo booth" experience for instant template generation',
        "Showcased at SF Design Week 2024, where users generated and printed 100+ personalized templates",
      ],
    },
  ];

  const emptyProject = {
    projectTitle: "",
    projectDates: "",
    projectDescriptions: "",
  };

  const initialSkill = [
    {
      skillTitle: "Languages",
      skillItems: "React, Python, JavaScript, SQL, C++, HTML, CSS",
    },
    {
      skillTitle: "Frameworks & Libraries",
      skillItems: "Tailwind CSS, Bootstrap, Tkinter, ROS2, OpenCV",
    },
    {
      skillTitle: "Tools & Platforms",
      skillItems:
        "Git, Linux, Netlify, Webpack, Google Maps API, Raspberry Pi, Arduino",
    },
  ];

  const emptySkill = {
    skillTitle: "",
    skillItems: "",
  };

  const [editable, setEditable] = useState(false);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [educations, setEducations] = useState(initialEducation);
  const [projects, setProjects] = useState(initialProject);
  const [skills, setSkills] = useState(initialSkill);

  function handleEditClick() {
    setEditable(!editable);
  }

  function handleAddElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences, emptyExperience]);
    } else if (element === "educations") {
      setEducations([...educations, emptyEducation]);
    } else if (element === "projects") {
      setProjects([...projects, emptyProject]);
    } else if (element === "skills") {
      setSkills([...skills, emptySkill]);
    }
  }

  function handleRemoveElementClick(element) {
    if (element === "experiences") {
      setExperiences([...experiences].slice(0, -1));
    } else if (element === "educations") {
      setEducations([...educations].slice(0, -1));
    } else if (element === "projects") {
      setProjects([...projects].slice(0, -1));
    } else if (element === "skills") {
      setSkills([...skills].slice(0, -1));
    }
  }

  return (
    <>
      <div className="edit-print-btn-container">
        <button className="btn edit-btn" onClick={handleEditClick}>
          {editable ? "Save" : "Edit"}
        </button>
        {editable ? (
          ""
        ) : (
          <button className="btn print-btn" onClick="">
            Print
          </button>
        )}
      </div>
      <div className="page">
        <Header editable={editable}></Header>
        <main>
          <div className="section-title">
            <h2>EXPERIENCE</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("experiences")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("experiences")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {experiences.map((exp, i) => {
            return (
              <Experience
                key={i}
                editable={editable}
                initialData={exp}
              ></Experience>
            );
          })}
          <div className="section-title">
            <h2>EDUCATION</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("educations")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("educations")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {educations.map((exp, i) => {
            return (
              <Education
                key={i}
                editable={editable}
                initialData={exp}
              ></Education>
            );
          })}
          <div className="section-title">
            <h2>PROJECTS</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("projects")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("projects")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {projects.map((exp, i) => {
            return (
              <Projects
                key={i}
                editable={editable}
                initialData={exp}
              ></Projects>
            );
          })}
          <div className="section-title">
            <h2>SKILLS</h2>
            <div className="section-btns-container">
              {editable ? (
                <>
                  <button
                    className="add-btn"
                    onClick={() => handleAddElementClick("skills")}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveElementClick("skills")}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr />
          {skills.map((exp, i) => {
            return (
              <Skills key={i} editable={editable} initialData={exp}></Skills>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
