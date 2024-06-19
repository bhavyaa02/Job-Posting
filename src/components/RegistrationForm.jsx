import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="section">
      <h2>Basic Details</h2>
      <label>Full Name:</label>
      <input type="text" placeholder="Full Name" />
      <label>Date of Birth:</label>
      <input type="date" />
      <label>Gender:</label>
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Current/Latest College:</label>
      <input type="text" placeholder="Current/Latest College" />
      <label>Current Course:</label>
      <input type="text" placeholder="Current Course" />
      <label>Batch:</label>
      <input type="text" placeholder="Batch" />
      <label>Roll No.:</label>
      <input type="text" placeholder="Roll No." />
    </div> 
  );
};

export default RegistrationForm;
