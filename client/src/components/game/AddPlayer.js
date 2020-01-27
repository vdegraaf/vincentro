import React from 'react';
import Add from '../icons/Add';

const AddPlayer = ({ isActive, setIsActive }) => {

  return (
    <div onClick={() => setIsActive(!isActive)} className="btn-addPlayer">
      <h3>New Player</h3>
      <Add />
    </div>
  );
};

export default AddPlayer;