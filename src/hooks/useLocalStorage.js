import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return initialValue;
    }
  });

  const [saveStatus, setSaveStatus] = useState('saved');

  const setValue = (value) => {
    try {
      setSaveStatus('saving');
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      setSaveStatus('saved');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      setSaveStatus('error');
    }
  };

  const clearValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
      setSaveStatus('saved');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      setSaveStatus('error');
    }
  };

  return [storedValue, setValue, clearValue, saveStatus];
};
