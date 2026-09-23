const express = require('express');
const router = express.Router();
const students = require('../data/students');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Student Management API is running',
    students
  });
});

router.get('/students', (req, res) => {
  res.status(200).json(students);
});

router.get('/students/:id', (req, res) => {
  const studentId = Number(req.params.id);
  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  return res.status(200).json(student);
});

router.post('/students', (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    age,
    course
  };

  students.push(newStudent);
  return res.status(201).json({ message: 'Student added successfully', student: newStudent });
});

router.put('/students/:id', (req, res) => {
  const studentId = Number(req.params.id);
  const studentIndex = students.findIndex((item) => item.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  students[studentIndex] = {
    ...students[studentIndex],
    name,
    age,
    course
  };

  return res.status(200).json({ message: 'Student updated successfully', student: students[studentIndex] });
});

router.delete('/students/:id', (req, res) => {
  const studentId = Number(req.params.id);
  const studentIndex = students.findIndex((item) => item.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const [deletedStudent] = students.splice(studentIndex, 1);
  return res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
});

module.exports = router;
