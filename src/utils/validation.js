export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validatePersonalInfo = (personalInfo) => {
  const errors = {};

  if (!validateRequired(personalInfo.fullName)) {
    errors.fullName = 'Full name is required';
  }

  if (!validateRequired(personalInfo.title)) {
    errors.title = 'Professional title is required';
  }

  if (!validateRequired(personalInfo.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(personalInfo.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
};
