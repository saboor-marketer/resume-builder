import React from 'react';

const MinimalTemplate = ({ resume, customization }) => {
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
    <div className="minimal-template" style={sectionStyle}>
      {/* Header */}
      <div className="mb-4" style={{ borderBottom: '1px solid #000', paddingBottom: '20px' }}>
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt="Profile"
            style={{ width: '80px', height: '80px', borderRadius: '4px', objectFit: 'cover', marginBottom: '15px' }}
          />
        )}
        <h1 style={{ color: primaryColor, fontWeight: '400' }}>{personalInfo.fullName}</h1>
        <p style={{ color: '#333', fontWeight: '400', marginTop: '5px' }}>{personalInfo.title}</p>
        <div style={{ color: '#555', fontSize: '13px', lineHeight: '1.8' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span className="mx-2">/</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span className="mx-2">/</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {(personalInfo.website || personalInfo.linkedin) && <br />}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.website && personalInfo.linkedin && <span className="mx-2">/</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={sectionStyle}>
          <h2>Summary</h2>
          <p style={{ lineHeight: '1.7' }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div style={sectionStyle}>
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={exp.id} className="mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{exp.title}</strong>
                <span style={{ fontSize: '13px' }}>
                  {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <div style={{ color: '#555', fontSize: '13px' }}>
                {exp.company}{exp.location && `, ${exp.location}`}
              </div>
              {exp.description && <p style={{ marginTop: '8px', lineHeight: '1.7' }}>{exp.description}</p>}
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{edu.degree}</strong>
                <span style={{ fontSize: '13px' }}>
                  {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                </span>
              </div>
              <div style={{ color: '#555', fontSize: '13px' }}>
                {edu.institution}{edu.location && `, ${edu.location}`}
              </div>
              {edu.description && <p style={{ marginTop: '8px', lineHeight: '1.7' }}>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div style={sectionStyle}>
          <h2>Skills</h2>
          <div style={{ lineHeight: '1.8' }}>
            {skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name} ({skill.level})
                {index < skills.length - 1 && <span>, </span>}
              </span>
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
                <div style={{ color: '#555', fontSize: '12px', marginTop: '4px' }}>
                  {project.technologies}
                </div>
              )}
              {project.description && <p style={{ marginTop: '8px', lineHeight: '1.7' }}>{project.description}</p>}
              {(project.url || project.github) && (
                <div style={{ fontSize: '12px' }}>
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>}
                  {project.url && project.github && <span className="mx-2">/</span>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>}
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
            <div key={cert.id} className="mb-2" style={{ fontSize: '13px' }}>
              <strong>{cert.name}</strong>
              <span style={{ color: '#555' }}> – {cert.organization}</span>
              <span style={{ color: '#555' }}> ({formatDate(cert.issueDate)})</span>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                  Link
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
          <div style={{ lineHeight: '1.8' }}>
            {languages.map((lang, index) => (
              <span key={lang.id}>
                {lang.language} ({lang.proficiency})
                {index < languages.length - 1 && <span>, </span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
