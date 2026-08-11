import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormSection from './FormSection';

const SkillsForm = ({ skills, onChange }) => {
  const handleAdd = () => {
    const newSkill = {
      id: `skill-${Date.now()}`,
      name: '',
      level: 'Intermediate'
    };
    onChange([...skills, newSkill]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const handleDelete = (id) => {
    onChange(skills.filter((skill) => skill.id !== id));
  };

  return (
    <FormSection title="Skills">
      {skills.map((skill, index) => (
        <div key={skill.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Skill #{index + 1}</h6>
            <button
              className="btn-delete"
              onClick={() => handleDelete(skill.id)}
              aria-label="Delete"
            >
              <FaTrash />
            </button>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Skill Name</label>
              <input
                type="text"
                className="form-control"
                value={skill.name}
                onChange={(e) => handleUpdate(skill.id, 'name', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Proficiency Level</label>
              <select
                className="form-select"
                value={skill.level}
                onChange={(e) => handleUpdate(skill.id, 'level', e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Skill
      </button>
    </FormSection>
  );
};

export default SkillsForm;
