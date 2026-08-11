export const importResumeFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        
        // Basic validation of the structure
        if (!data.personalInfo || !data.experience || !data.education) {
          throw new Error('Invalid resume data structure');
        }
        
        resolve(data);
      } catch (error) {
        reject(new Error('Invalid JSON file. Please upload a valid resume export.'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file. Please try again.'));
    };
    
    reader.readAsText(file);
  });
};
