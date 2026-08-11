import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      <h5>{title}</h5>
      {children}
    </div>
  );
};

export default FormSection;
