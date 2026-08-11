import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultResume } from './data/defaultResume';
import { validatePersonalInfo } from './utils/validation';
import Header from './components/Header';
import Editor from './components/Editor';
import ResumePreview from './components/ResumePreview';

function App() {
  const [resume, setResume, clearResume, saveStatus] = useLocalStorage('resumeData', defaultResume);
  const [customization, setCustomization] = useState({
    template: 'classic',
    primaryColor: '#2563eb',
    fontSize: 14,
    sectionSpacing: 20
  });
  const [validationErrors, setValidationErrors] = useState({});

  // Validate personal info on change
  useEffect(() => {
    const errors = validatePersonalInfo(resume.personalInfo);
    setValidationErrors({ personalInfo: errors });
  }, [resume.personalInfo]);

  const handleClear = () => {
    clearResume();
    setCustomization({
      template: 'classic',
      primaryColor: '#2563eb',
      fontSize: 14,
      sectionSpacing: 20
    });
  };

  const handleResumeImport = (importedData) => {
    setResume(importedData);
  };

  return (
    <div className="app-container">
      <Header
        customization={customization}
        setCustomization={setCustomization}
        saveStatus={saveStatus}
        onClear={handleClear}
        onResumeImport={handleResumeImport}
      />
      <div className="container-fluid" style={{ flex: 1 }}>
        <div className="row" style={{ height: 'calc(100vh - 80px)' }}>
          <div className="col-lg-5 col-md-6 p-0">
            <Editor
              resume={resume}
              setResume={setResume}
              validationErrors={validationErrors}
            />
          </div>
          <div className="col-lg-7 col-md-6 p-0">
            <ResumePreview
              resume={resume}
              customization={customization}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
