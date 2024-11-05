import React from 'react';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaAngular, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiKotlin, SiPython, SiAndroidstudio } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'Kotlin', icon: <SiKotlin />, color: '#0095D5' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="icon" style={{ color: skill.color }}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
