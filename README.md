# Resume Builder

A production-ready React application for creating professional resumes with live preview and multiple templates.

## Features

- **Live Preview**: See your resume update in real-time as you type
- **Multiple Templates**: Choose from Classic, Modern, or Minimal templates
- **Customization**: Adjust primary color, font size, and section spacing
- **Complete Resume Sections**:
  - Personal Information (with photo support)
  - Professional Summary
  - Work Experience (with reorder capability)
  - Education
  - Skills (with proficiency levels)
  - Projects
  - Certifications
  - Languages
- **Auto-Save**: Changes are automatically saved to LocalStorage
- **Import/Export**: Save and load your resume data as JSON files
- **Print/PDF**: Download your resume as PDF using browser's native print
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Form Validation**: Required field validation with clear error messages
- **Sample Data**: Pre-loaded with sample resume data to get started

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **React Icons** - Icon library
- **LocalStorage API** - Data persistence
- **JavaScript ES6+** - Language

## Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Fill in Your Information**: Use the form on the left side to enter your resume details
2. **See Live Preview**: The right side shows your resume in real-time
3. **Customize Appearance**: Use the header controls to:
   - Switch between templates (Classic, Modern, Minimal)
   - Change the primary color
   - Adjust font size (12px, 14px, 16px)
   - Modify section spacing (15px, 20px, 25px)
4. **Save Your Work**: Changes are automatically saved to LocalStorage
5. **Export/Import**: Use the download/upload buttons to save or load JSON files
6. **Print/Download**: Click the print button to download your resume as PDF
7. **Clear Data**: Use the trash button to clear all data (with confirmation)

## Project Structure

```
resume-builder/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Application header with controls
│   │   ├── Editor.jsx       # Main editor with all forms
│   │   ├── ResumePreview.jsx # Resume preview with template switching
│   │   ├── FormSection.jsx  # Reusable form wrapper
│   │   ├── PersonalInfoForm.jsx
│   │   ├── SummaryForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── EducationForm.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── ProjectsForm.jsx
│   │   ├── CertificationsForm.jsx
│   │   └── LanguagesForm.jsx
│   ├── templates/           # Resume templates
│   │   ├── ClassicTemplate.jsx
│   │   ├── ModernTemplate.jsx
│   │   └── MinimalTemplate.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── utils/               # Utility functions
│   │   ├── validation.js
│   │   ├── exportResume.js
│   │   └── importResume.js
│   ├── data/                # Default data
│   │   └── defaultResume.js
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Validation

Required fields:
- Full Name
- Professional Title
- Email (must be valid email format)

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- LocalStorage API

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Troubleshooting

**Problem**: Changes not saving
- **Solution**: Check browser console for LocalStorage errors. Ensure cookies and local data are enabled.

**Problem**: Print not showing correctly
- **Solution**: Ensure "Background graphics" is enabled in print settings.

**Problem**: Template styles not applying
- **Solution**: Clear browser cache and reload the page.
