import React from 'react';
import { FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import FormSection from './FormSection';

const ExperienceForm = ({ experience, onChange }) => {
  const handleAdd = () => {
    const newExperience = {
      id: `exp-${Date.now()}`,
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...experience, newExperience]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleDelete = (id) => {
    onChange(experience.filter((exp) => exp.id !== id));
  };

  const handleMove = (index, direction) => {
    const newExperience = [...experience];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newExperience.length) {
      [newExperience[index], newExperience[newIndex]] = [
        newExperience[newIndex],
        newExperience[index]
      ];
      onChange(newExperience);
    }
  };

  return (
    <FormSection title="Work Experience">
      {experience.map((exp, index) => (
        <div key={exp.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Experience #{index + 1}</h6>
            <div>
              <button
                className="btn-move me-2"
                onClick={() => handleMove(index, 'up')}
                disabled={index === 0}
                aria-label="Move up"
              >
                <FaArrowUp />
              </button>
              <button
                className="btn-move me-2"
                onClick={() => handleMove(index, 'down')}
                disabled={index === experience.length - 1}
                aria-label="Move down"
              >
                <FaArrowDown />
              </button>
              <button
                className="btn-delete"
                onClick={() => handleDelete(exp.id)}
                aria-label="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                value={exp.title}
                onChange={(e) => handleUpdate(exp.id, 'title', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                value={exp.company}
                onChange={(e) => handleUpdate(exp.id, 'company', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                value={exp.location}
                onChange={(e) => handleUpdate(exp.id, 'location', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Start Date</label>
              <input
                type="month"
                className="form-control"
                value={exp.startDate}
                onChange={(e) => handleUpdate(exp.id, 'startDate', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">End Date</label>
              <input
                type="month"
                className="form-control"
                value={exp.endDate}
                onChange={(e) => handleUpdate(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) => {
                    handleUpdate(exp.id, 'current', e.target.checked);
                    if (e.target.checked) {
                      handleUpdate(exp.id, 'endDate', '');
                    }
                  }}
                />
                <label className="form-check-label" htmlFor={`current-${exp.id}`}>
                  Current Job
                </label>
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={exp.description}
                onChange={(e) => handleUpdate(exp.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Experience
      </button>
    </FormSection>
  );
};

export default ExperienceForm;
