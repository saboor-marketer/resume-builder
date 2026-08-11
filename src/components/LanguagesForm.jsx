import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormSection from './FormSection';

const LanguagesForm = ({ languages, onChange }) => {
  const handleAdd = () => {
    const newLanguage = {
      id: `lang-${Date.now()}`,
      language: '',
      proficiency: 'Intermediate'
    };
    onChange([...languages, newLanguage]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    );
  };

  const handleDelete = (id) => {
    onChange(languages.filter((lang) => lang.id !== id));
  };

  return (
    <FormSection title="Languages">
      {languages.map((lang, index) => (
        <div key={lang.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Language #{index + 1}</h6>
            <button
              className="btn-delete"
              onClick={() => handleDelete(lang.id)}
              aria-label="Delete"
            >
              <FaTrash />
            </button>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Language</label>
              <input
                type="text"
                className="form-control"
                value={lang.language}
                onChange={(e) => handleUpdate(lang.id, 'language', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Proficiency</label>
              <select
                className="form-select"
                value={lang.proficiency}
                onChange={(e) => handleUpdate(lang.id, 'proficiency', e.target.value)}
              >
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Language
      </button>
    </FormSection>
  );
};

export default LanguagesForm;
