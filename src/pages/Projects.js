import React, { useEffect, useState } from "react";
import "../Styles/Projects.css";

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/.netlify/functions/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="container-box">
        {
          projects ?
            projects.map(object => {
              return (
                <div className="project-box" key={object.id}>
                  <h2>{object.name}</h2>
                  <p>{object.description}</p>
                  <p><b>Author: </b>{object.author}</p>
                  <p><b>Languages: </b>{object.Languages}</p>
                </div>)
            })
            : null
        }
      </div>
    </div>
  );
}

export default Projects;
