import React, { useRef } from 'react';
import { FaDownload, FaUpload, FaPrint, FaTrash, FaSave } from 'react-icons/fa';
import { exportResumeAsJSON } from '../utils/exportResume';
import { importResumeFromJSON } from '../utils/importResume';

const Header = ({
  customization,
  setCustomization,
  saveStatus,
  onClear,
  onResumeImport
}) => {
  const fileInputRef = useRef(null);

  const handleTemplateChange = (template) => {
    setCustomization({ ...customization, template });
  };

  const handleColorChange = (color) => {
    setCustomization({ ...customization, primaryColor: color });
  };

  const handleFontSizeChange = (fontSize) => {
    setCustomization({ ...customization, fontSize: parseInt(fontSize) });
  };

  const handleSpacingChange = (spacing) => {
    setCustomization({ ...customization, sectionSpacing: parseInt(spacing) });
  };

  const handleExport = () => {
    exportResumeAsJSON(onResumeImport);
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const data = await importResumeFromJSON(file);
        onResumeImport(data);
      } catch (error) {
        alert(error.message);
      }
      event.target.value = '';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all resume data? This action cannot be undone.')) {
      onClear();
    }
  };

  const getSaveStatusText = () => {
    switch (saveStatus) {
      case 'saved':
        return '✓ Saved';
      case 'saving':
        return 'Saving...';
      case 'error':
        return 'Unable to save changes locally.';
      default:
        return '';
    }
  };

  const getSaveStatusClass = () => {
    switch (saveStatus) {
      case 'saved':
        return 'saved';
      case 'saving':
        return 'saving';
      case 'error':
        return 'error';
      default:
        return '';
    }
  };

  return (
    <header className="bg-white border-bottom p-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h4 className="mb-0" style={{ color: '#2563eb' }}>
              Resume Builder
            </h4>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <label className="form-label mb-0 small">Template:</label>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '120px' }}
                  value={customization.template}
                  onChange={(e) => handleTemplateChange(e.target.value)}
                >
                  <option value="classic">Classic</option>
                  <option value="modern">Modern</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="form-label mb-0 small">Color:</label>
                <input
                  type="color"
                  className="color-picker"
                  value={customization.primaryColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="form-label mb-0 small">Font Size:</label>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '80px' }}
                  value={customization.fontSize}
                  onChange={(e) => handleFontSizeChange(e.target.value)}
                >
                  <option value="12">12px</option>
                  <option value="14">14px</option>
                  <option value="16">16px</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="form-label mb-0 small">Spacing:</label>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '80px' }}
                  value={customization.sectionSpacing}
                  onChange={(e) => handleSpacingChange(e.target.value)}
                >
                  <option value="15">15px</option>
                  <option value="20">20px</option>
                  <option value="25">25px</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-wrap gap-2 justify-content-end align-items-center">
              <span className={`save-indicator ${getSaveStatusClass()}`}>
                {getSaveStatusText()}
              </span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleImportClick}
                title="Import JSON"
              >
                <FaUpload />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleExport}
                title="Export JSON"
              >
                <FaDownload />
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handlePrint}
                title="Print Resume"
              >
                <FaPrint />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={handleClear}
                title="Clear Resume"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
