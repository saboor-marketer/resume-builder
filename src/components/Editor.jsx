import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import CertificationsForm from './CertificationsForm';
import LanguagesForm from './LanguagesForm';

const Editor = ({ resume, setResume, validationErrors }) => {
  return (
    <div className="editor-panel p-4">
      <PersonalInfoForm
        data={resume.personalInfo}
        onChange={(personalInfo) => setResume({ ...resume, personalInfo })}
        errors={validationErrors.personalInfo || {}}
      />
      <SummaryForm
        summary={resume.summary}
        onChange={(summary) => setResume({ ...resume, summary })}
      />
      <ExperienceForm
        experience={resume.experience}
        onChange={(experience) => setResume({ ...resume, experience })}
      />
      <EducationForm
        education={resume.education}
        onChange={(education) => setResume({ ...resume, education })}
      />
      <SkillsForm
        skills={resume.skills}
        onChange={(skills) => setResume({ ...resume, skills })}
      />
      <ProjectsForm
        projects={resume.projects}
        onChange={(projects) => setResume({ ...resume, projects })}
      />
      <CertificationsForm
        certifications={resume.certifications}
        onChange={(certifications) => setResume({ ...resume, certifications })}
      />
      <LanguagesForm
        languages={resume.languages}
        onChange={(languages) => setResume({ ...resume, languages })}
      />
    </div>
  );
};

export default Editor;
