import React, { useState } from 'react';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addCourse = () => {
    if (!name) return alert("Course name is required!");
    if (editIndex !== null) {
      const updated = [...courses];
      updated[editIndex] = name;
      setCourses(updated);
      setEditIndex(null);
    } else {
      setCourses([...courses, name]);
    }
    setName('');
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const editCourse = (index) => {
    setName(courses[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Courses</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter course name" />
      <button onClick={addCourse}>{editIndex !== null ? 'Update' : 'Add'}</button>

      <ul>
        {courses.map((c, i) => (
          <li key={i}>
            {c}
            <button onClick={() => editCourse(i)}>Edit</button>
            <button onClick={() => deleteCourse(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;
