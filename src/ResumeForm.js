import React, { useState } from 'react';

function ResumeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    summary: '',
    // You may add more fields if needed.
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="summary"
        placeholder="Summary"
        value={formData.summary}
        onChange={handleChange}
      />
      {/* \Assign additional inputs as required */}
      <button type="submit">Create Resume</button>
    </form>
  );
}

export default ResumeForm;
