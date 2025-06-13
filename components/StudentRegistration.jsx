import React, { useState } from 'react';

const StudentRegistration = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [courseType, setCourseType] = useState('');
  const [filterType, setFilterType] = useState('');

  const registerStudent = () => {
    if (!studentName || !course || !courseType) return alert("All fields required");
    setStudents([...students, { studentName, course, courseType }]);
    setStudentName('');
    setCourse('');
    setCourseType('');
  };

  const filtered = filterType ? students.filter(s => s.courseType === filterType) : students;

  return (
    <div>
      <h2>Student Registration</h2>
      <input placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      <input placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
      <input placeholder="Course Type" value={courseType} onChange={(e) => setCourseType(e.target.value)} />
      <button onClick={registerStudent}>Register</button>

      <h3>Filter by Course Type</h3>
      <input placeholder="Enter Course Type" value={filterType} onChange={(e) => setFilterType(e.target.value)} />

      <h3>Registered Students</h3>
      <ul>
        {filtered.map((s, i) => (
          <li key={i}>{s.studentName} - {s.course} ({s.courseType})</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegistration;
