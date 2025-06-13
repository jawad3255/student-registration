import React, { useState } from 'react';

const CourseTypeManager = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addCourseType = () => {
    if (!name) return alert("Course type name is required!");
    if (editIndex !== null) {
      const updated = [...courseTypes];
      updated[editIndex] = name;
      setCourseTypes(updated);
      setEditIndex(null);
    } else {
      setCourseTypes([...courseTypes, name]);
    }
    setName('');
  };

  const deleteCourseType = (index) => {
    const updated = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updated);
  };

  const editCourseType = (index) => {
    setName(courseTypes[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter course type" />
      <button onClick={addCourseType}>{editIndex !== null ? 'Update' : 'Add'}</button>

      <ul>
        {courseTypes.map((ct, i) => (
          <li key={i}>
            {ct}
            <button onClick={() => editCourseType(i)}>Edit</button>
            <button onClick={() => deleteCourseType(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManager;
