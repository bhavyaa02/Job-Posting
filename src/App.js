import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import CustomQuestionsForm from './components/CustomQuestionsForm';
import QuestionTable from './components/QuestionTable';
import './App.css';

const App = () => {
  const [withTracker, setWithTracker] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleTrackerChange = (e) => {
    setWithTracker(e.target.value === 'yes');
  };

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Job Posting</h1>
          
        </div>
      </div>

      <RegistrationForm />
      <div className="section">
        <h2>Tracker</h2>
        <hr className='hr'/>
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
    </div>
  );
};

export default App;
