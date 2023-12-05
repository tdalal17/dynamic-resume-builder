// src/App.js
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";

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
