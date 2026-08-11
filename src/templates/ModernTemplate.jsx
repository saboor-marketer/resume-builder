import React from 'react';

const ModernTemplate = ({ resume, customization }) => {
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
    <div className="modern-template" style={sectionStyle}>
      {/* Header */}
      <div className="mb-4">
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover', marginBottom: '15px' }}
          />
        )}
        <h1 style={{ color: primaryColor }}>{personalInfo.fullName}</h1>
        <p className="h5" style={{color: '#666', fontWeight: '500'}}>{personalInfo.title}</p>
        <div style={{ color: '#555', fontSize: '14px' }}>
          {personalInfo.email && <span>📧 {personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span className="mx-2">•</span>}
          {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span className="mx-2">•</span>}
          {personalInfo.location && <span>📍 {personalInfo.location}</span>}
          {(personalInfo.website || personalInfo.linkedin) && <br />}
          {personalInfo.website && <span>🌐 {personalInfo.website}</span>}
          {personalInfo.website && personalInfo.linkedin && <span className="mx-2">•</span>}
          {personalInfo.linkedin && <span>💼 {personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Professional Summary</h2>
          <p style={{ lineHeight: '1.6' }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3" style={{ borderLeft: `3px solid ${primaryColor}`, paddingLeft: '15px' }}>
              <div className="d-flex justify-content-between align-items-center">
                <strong style={{ fontSize: '16px' }}>{exp.title}</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <div style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
                {exp.company} {exp.location && `• ${exp.location}`}
              </div>
              {exp.description && <p style={{ marginTop: '8px', lineHeight: '1.5' }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3" style={{ borderLeft: `3px solid ${primaryColor}`, paddingLeft: '15px' }}>
              <div className="d-flex justify-content-between align-items-center">
                <strong style={{ fontSize: '16px' }}>{edu.degree}</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
              <div style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
                {edu.institution} {edu.location && `• ${edu.location}`}
              </div>
              {edu.description && <p style={{ marginTop: '8px', lineHeight: '1.5' }}>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill) => (
              <span
                key={skill.id}
                style={{
                  backgroundColor: primaryColor,
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '13px'
                }}
              >
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3" style={{ borderLeft: `3px solid ${primaryColor}`, paddingLeft: '15px' }}>
              <strong style={{ fontSize: '16px' }}>{project.name}</strong>
              {project.technologies && (
                <div style={{ color: '#666', fontSize: '13px', marginTop: '4px' }}>
                  🛠 {project.technologies}
                </div>
              )}
              {project.description && <p style={{ marginTop: '8px', lineHeight: '1.5' }}>{project.description}</p>}
              {(project.url || project.github) && (
                <div style={{ fontSize: '13px' }}>
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }}>🔗 Live Demo</a>}
                  {project.url && project.github && <span className="mx-2">•</span>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }}>💻 GitHub</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-2" style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: primaryColor, marginRight: '8px' }}>📜</span>
              <div>
                <strong>{cert.name}</strong>
                <div style={{ color: '#666', fontSize: '13px' }}>
                  {cert.organization} • {formatDate(cert.issueDate)}
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: primaryColor }}>
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div style={sectionStyle}>
          <h2 style={{ color: primaryColor }}>Languages</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {languages.map((lang) => (
              <div key={lang.id} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: primaryColor, marginRight: '6px' }}>🌍</span>
                <span>{lang.language}</span>
                <span style={{ color: '#666', marginLeft: '6px' }}>({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
