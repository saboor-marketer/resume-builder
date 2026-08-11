import React from 'react';
import FormSection from './FormSection';

const PersonalInfoForm = ({ data, onChange, errors }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <FormSection title="Personal Information">
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            id="fullName"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Professional Title *
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            id="title"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            type="url"
            className="form-control"
            id="website"
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="linkedin" className="form-label">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="photo" className="form-label">
            Profile Photo URL
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            value={data.photo}
            onChange={(e) => handleChange('photo', e.target.value)}
            placeholder="https://example.com/photo.jpg"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInfoForm;
