import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormSection from './FormSection';

const EducationForm = ({ education, onChange }) => {
  const handleAdd = () => {
    const newEducation = {
      id: `edu-${Date.now()}`,
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...education, newEducation]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const handleDelete = (id) => {
    onChange(education.filter((edu) => edu.id !== id));
  };

  return (
    <FormSection title="Education">
      {education.map((edu, index) => (
        <div key={edu.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Education #{index + 1}</h6>
            <button
              className="btn-delete"
              onClick={() => handleDelete(edu.id)}
              aria-label="Delete"
            >
              <FaTrash />
            </button>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-control"
                value={edu.degree}
                onChange={(e) => handleUpdate(edu.id, 'degree', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Institution</label>
              <input
                type="text"
                className="form-control"
                value={edu.institution}
                onChange={(e) => handleUpdate(edu.id, 'institution', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                value={edu.location}
                onChange={(e) => handleUpdate(edu.id, 'location', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Start Date</label>
              <input
                type="month"
                className="form-control"
                value={edu.startDate}
                onChange={(e) => handleUpdate(edu.id, 'startDate', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">End Date</label>
              <input
                type="month"
                className="form-control"
                value={edu.endDate}
                onChange={(e) => handleUpdate(edu.id, 'endDate', e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="2"
                value={edu.description}
                onChange={(e) => handleUpdate(edu.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Education
      </button>
    </FormSection>
  );
};

export default EducationForm;
