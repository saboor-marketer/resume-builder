import React from 'react';

const ClassicTemplate = ({ resume, customization }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages } = resume;
  const { primaryColor, fontSize, sectionSpacing } = customization;

  const formatDate = (date) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const sectionStyle = {
    marginTop: `${sectionSpacing}px`,
    fontSize: `${fontSize}px`
  };

  return (
    <div className="classic-template" style={sectionStyle}>
      {/* Header */}
      <div className="text-center mb-4">
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt="Profile"
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }}
          />
        )}
        <h1 style={{ color: primaryColor }}>{personalInfo.fullName}</h1>
        <p className="h4" style={{ color: '#666' }}>{personalInfo.title}</p>
        <div className="text-muted">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && (personalInfo.phone || personalInfo.location) && <span> | </span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span> | </span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {(personalInfo.website || personalInfo.linkedin) && <br />}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.website && personalInfo.linkedin && <span> | </span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={sectionStyle}>
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div style={sectionStyle}>
          <h2>Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong>{exp.title}</strong>
                <span>
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <div className="text-muted">
                {exp.company} {exp.location && `| ${exp.location}`}
              </div>
              {exp.description && <p className="mt-1">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div style={sectionStyle}>
          <h2>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong>{edu.degree}</strong>
                <span>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
              <div className="text-muted">
                {edu.institution} {edu.location && `| ${edu.location}`}
              </div>
              {edu.description && <p className="mt-1">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div style={sectionStyle}>
          <h2>Skills</h2>
          <div className="row">
            {skills.map((skill) => (
              <div key={skill.id} className="col-md-6 mb-2">
                <span>{skill.name}</span>
                <span className="text-muted"> — {skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div style={sectionStyle}>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <strong>{project.name}</strong>
              {project.technologies && (
                <div className="text-muted small">{project.technologies}</div>
              )}
              {project.description && <p className="mt-1">{project.description}</p>}
              {(project.url || project.github) && (
                <div className="small">
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  {project.url && project.github && <span> | </span>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div style={sectionStyle}>
          <h2>Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-2">
              <strong>{cert.name}</strong>
              <div className="text-muted">
                {cert.organization} | {formatDate(cert.issueDate)}
              </div>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="small">
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div style={sectionStyle}>
          <h2>Languages</h2>
          <div className="row">
            {languages.map((lang) => (
              <div key={lang.id} className="col-md-6 mb-2">
                <span>{lang.language}</span>
                <span className="text-muted"> — {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
