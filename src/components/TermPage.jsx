import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  // Filter courses based on the selected term
  const filteredCourses = Object.fromEntries(
    Object.entries(courses).filter(([key, course]) => course.term === selectedTerm)
  );

  return (
    <div className="term-page">
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default TermPage;
