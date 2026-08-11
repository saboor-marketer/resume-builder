import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormSection from './FormSection';

const ProjectsForm = ({ projects, onChange }) => {
  const handleAdd = () => {
    const newProject = {
      id: `proj-${Date.now()}`,
      name: '',
      description: '',
      technologies: '',
      url: '',
      github: ''
    };
    onChange([...projects, newProject]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const handleDelete = (id) => {
    onChange(projects.filter((project) => project.id !== id));
  };

  return (
    <FormSection title="Projects">
      {projects.map((project, index) => (
        <div key={project.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Project #{index + 1}</h6>
            <button
              className="btn-delete"
              onClick={() => handleDelete(project.id)}
              aria-label="Delete"
            >
              <FaTrash />
            </button>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                value={project.name}
                onChange={(e) => handleUpdate(project.id, 'name', e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="2"
                value={project.description}
                onChange={(e) => handleUpdate(project.id, 'description', e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Technologies</label>
              <input
                type="text"
                className="form-control"
                value={project.technologies}
                onChange={(e) => handleUpdate(project.id, 'technologies', e.target.value)}
                placeholder="React, Bootstrap, Node.js"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Project URL</label>
              <input
                type="url"
                className="form-control"
                value={project.url}
                onChange={(e) => handleUpdate(project.id, 'url', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">GitHub URL</label>
              <input
                type="url"
                className="form-control"
                value={project.github}
                onChange={(e) => handleUpdate(project.id, 'github', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Project
      </button>
    </FormSection>
  );
};

export default ProjectsForm;
