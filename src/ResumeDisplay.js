// src/ResumeDisplay.js
import React from 'react';

function ResumeDisplay({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.summary}</p>
      {/* Show more fields if required. */}
    </div>
  );
}

export default ResumeDisplay;
