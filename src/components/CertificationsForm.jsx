import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormSection from './FormSection';

const CertificationsForm = ({ certifications, onChange }) => {
  const handleAdd = () => {
    const newCertification = {
      id: `cert-${Date.now()}`,
      name: '',
      organization: '',
      issueDate: '',
      url: ''
    };
    onChange([...certifications, newCertification]);
  };

  const handleUpdate = (id, field, value) => {
    onChange(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  const handleDelete = (id) => {
    onChange(certifications.filter((cert) => cert.id !== id));
  };

  return (
    <FormSection title="Certifications">
      {certifications.map((cert, index) => (
        <div key={cert.id} className="entry-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Certification #{index + 1}</h6>
            <button
              className="btn-delete"
              onClick={() => handleDelete(cert.id)}
              aria-label="Delete"
            >
              <FaTrash />
            </button>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Certificate Name</label>
              <input
                type="text"
                className="form-control"
                value={cert.name}
                onChange={(e) => handleUpdate(cert.id, 'name', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Issuing Organization</label>
              <input
                type="text"
                className="form-control"
                value={cert.organization}
                onChange={(e) => handleUpdate(cert.id, 'organization', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Issue Date</label>
              <input
                type="month"
                className="form-control"
                value={cert.issueDate}
                onChange={(e) => handleUpdate(cert.id, 'issueDate', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Credential URL</label>
              <input
                type="url"
                className="form-control"
                value={cert.url}
                onChange={(e) => handleUpdate(cert.id, 'url', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="btn-add mt-3" onClick={handleAdd}>
        + Add Certification
      </button>
    </FormSection>
  );
};

export default CertificationsForm;
