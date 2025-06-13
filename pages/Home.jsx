import React from 'react';
import CourseTypeManager from '../components/CourseTypeManager';
import CourseManager from '../components/CourseManager';
import StudentRegistration from '../components/StudentRegistration';

const Home = () => {
  return (
    <div>
      <h1>Student Registration System</h1>
      <CourseTypeManager />
      <CourseManager />
      <StudentRegistration />
    </div>
  );
};

export default Home;
