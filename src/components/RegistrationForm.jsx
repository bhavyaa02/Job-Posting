import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RegistrationForm = () => {
  const options = ['CS', 'IT', 'AI&DS'];

  
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

 
  const addRole = () => {
    if (newRole.trim() !== '') {
      setRoles([...roles, newRole.trim()]);
      setNewRole('');
    }
  };

  
  const removeRole = (index) => {
    const updatedRoles = roles.filter((_, idx) => idx !== index);
    setRoles(updatedRoles);
  };

  return (
    <div className="section">
      <h2>Basic Details</h2>
      <label>Job Description:</label>
      <input type="text" placeholder="Job Description" />
      <label>Package details:</label>
      <input type="text" placeholder="Package" />
      
      <div style={{ marginBottom: '10px' }}>
        <label>Roles:</label>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
          {roles.map((role, index) => (
            <Chip
              key={index}
              label={role}
              onDelete={() => removeRole(index)}
              deleteIcon={<CancelIcon />}
              style={{ margin: '5px' }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <TextField
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter Role"
            style={{ flex: 1, minWidth: '120px', marginRight: '10px' }}
          />
          <button
            type="button"
            onClick={addRole}
            style={{
              padding: '8px 16px',
              backgroundColor: '#3784f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </div>
      </div>

      <label>10th Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>12th Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>Degree Criteria:</label>
      <input type="number" placeholder="percentage" />
      <label>Diploma Criteria:</label>
      <input type="number" placeholder="percentage" />
      
      <label>Eligible Branches:</label>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(option, { selected }) => (
          <>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </>
        )}
        style={{ width: 860 }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Select Branches" />
        )}
      />
      
      <label>Docs (if any):</label>
      <input type="file" accept=".pdf,.doc,.docx,.txt" placeholder="Add file" />
    </div>
  );
};

export default RegistrationForm;