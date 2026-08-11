import React from 'react';
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';

const ResumePreview = ({ resume, customization }) => {
  const { template } = customization;

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate resume={resume} customization={customization} />;
      case 'minimal':
        return <MinimalTemplate resume={resume} customization={customization} />;
      case 'classic':
      default:
        return <ClassicTemplate resume={resume} customization={customization} />;
    }
  };

  return (
    <div className="resume-preview">
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
