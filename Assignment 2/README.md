# Student Management REST API

A simple Express.js API for managing student records.

## Features
- Get all students
- Get a student by ID
- Add a new student
- Update a student
- Delete a student

## Run
```bash
cd "Assignment 2"
npm install
npm start
```

Open:
```bash
http://localhost:3000/
```

## Sample response
```json
{
  "message": "Student Management REST API",
  "endpoints": [
    "GET /students",
    "GET /students/:id",
    "POST /students",
    "PUT /students/:id",
    "DELETE /students/:id"
  ]
}
```

