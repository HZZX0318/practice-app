import React from 'react';
import './TermSelector.css';

const TermSelector = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div className="term-selector">
      {['Fall', 'Winter', 'Spring'].map(term => (
        <button
          key={term}
          className={selectedTerm === term ? 'active' : ''}
          onClick={() => setSelectedTerm(term)}
        >
          {term}
        </button>
      ))}
    </div>
  );
};

export default TermSelector;