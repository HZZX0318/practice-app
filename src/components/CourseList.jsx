import './CourseList.css';

const CourseList = ({ courses }) => {
    return (
      <section className="course-list-container">
        {Object.entries(courses).map(([key, course]) => (
            <div key={key} className="course-card">
              <h3>{course.term} CS {course.number}</h3>
              <p>{course.title}</p>
              <p><strong>Meets:</strong> {course.meets}</p>
            </div>
          ))}
      </section>
    );
};

export default CourseList;  