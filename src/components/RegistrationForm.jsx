import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="section">
      <h2>Basic Details</h2>
      <label>Job Desciption:</label>
      <input type="text" placeholder="Job Desciption" />
      <label>Package details:</label>
      <input type="text"  placeholder="Package" />
      <label>Roles:</label>
      <input type="text" placeholder="Roles" />
          
      
      
      <label>10th Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>12th Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>Degree Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>Diploma Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>Eligible Branches:</label>
      <select>
        <option value="select">SELECT</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="AIDS">AI&DS</option>
      </select>
      <label>Docs (if any):</label>

      <input type="file" accept=".pdf,.doc,.docx,.txt" placeholder="Add file" />
      
    </div> 
  );
};

export default RegistrationForm;
