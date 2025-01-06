const CourseList = ({ courses }) => {
    return (
      <div>
        {Object.entries(courses).map(([key, course]) => (
            <li key={key}>
              <strong>{course.term} {course.number}:</strong> {course.title} <br />
            </li>
          ))}
      </div>
    );
};
  
export default CourseList;  