import React from 'react';
import FormSection from './FormSection';

const SummaryForm = ({ summary, onChange }) => {
  return (
    <FormSection title="Professional Summary">
      <div className="mb-3">
        <label htmlFor="summary" className="form-label">
          Summary
        </label>
        <textarea
          className="form-control"
          id="summary"
          rows="4"
          value={summary}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write a brief professional summary..."
        />
      </div>
    </FormSection>
  );
};

export default SummaryForm;
