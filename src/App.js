// src/App.js
import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumeDisplay from './ResumeDisplay';

function App() {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (formData) => {
    setResumeData(formData);
  };

  return (
    <div>
      <ResumeForm onSubmit={handleFormSubmit} />
      {resumeData && <ResumeDisplay data={resumeData} />}
    </div>
  );
}

export default App;
