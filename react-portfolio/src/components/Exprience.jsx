import React from 'react';

const ExperienceItem = ({ title, company, dates, skills, description }) => {
  return (
    <div className="experience-item">
      <h3>{title} – {company}</h3>
      <p>{dates}</p>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="divider">
      <div>
        <h1>Experience</h1>
      </div>
      <ExperienceItem
        title="IT Developer"
        company="Hennepin County"
        dates="July 2024 – Present"
        skills={['Angular', 'TypeScript', 'HTML', 'CSS']}
        description="Developed front-end UI components using Angular, TypeScript, HTML, and CSS. Fixed bugs and implemented UI improvements to enhance user experience, while ensuring code quality through participation in code reviews."
      />
      <ExperienceItem
        title="IT Quality Assurance Intern"
        company="Hennepin County"
        dates="Jan 2024 – Present"
        skills={['Manual Testing', 'Cypress.io', 'Agile Development']}
        description="Skilled in manual testing methodologies, including test case design, execution, and defect tracking. Conducted end-to-end testing using Cypress.io and participated in agile development, including sprint planning, daily stand-ups, and retrospectives."
      />
      <ExperienceItem
        title="Career Preparation Fellow"
        company="Management Leadership for Tomorrow (MLT)"
        dates="Jan 2024 – Present"
        skills={['Professional Development', 'Leadership Training']}
        description="Selected for an 18-month professional development program focused on cultivating high-achieving diverse talent. Completed business case studies and assignments to enhance leadership and technical skills."
      />
    </section>
  );
};

export default Experience;
