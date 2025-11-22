import React from "react";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 75 }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
