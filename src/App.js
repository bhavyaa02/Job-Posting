import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import CustomQuestionsForm from './components/CustomQuestionsForm';
import QuestionTable from './components/QuestionTable';
import './App.css';

const App = () => {
  const [withTracker, setWithTracker] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  const confirmedCompanies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' }
  ];

  const handleTrackerChange = (e) => {
    setWithTracker(e.target.value === 'yes');
  };

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Job Posting</h1>
         
        </div>
      </div>
      <div className="section">
        <h2>Companies with Confirmed Status</h2>
        <label>Company:</label>
        <select onChange={handleCompanyChange} value={selectedCompany}>
          <option value="">Select Company</option>
          {confirmedCompanies.map(company => (
            <option key={company.id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCompany && (
        <>
          <RegistrationForm />
          <div className="section">
            <h2>Tracker</h2>
            <label>With Tracker?</label>
            <select onChange={handleTrackerChange}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {withTracker && (
            <CustomQuestionsForm onAddQuestion={handleAddQuestion} />
          )}
          {withTracker && questions.length > 0 && (
            <QuestionTable questions={questions} />
          )}
          <div className="section">
            <button type="submit">Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
