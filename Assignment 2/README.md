# Lab Assignment 2 - Student Management REST API

## Course
Web Dev III (Node.js & Express Backend)

## Unit
Unit-2

## Marks
2.5

## Assignment Overview
This assignment focuses on creating a Student Management REST API using Express.js. The API manages student records with CRUD operations and demonstrates modular routing, custom middleware, validation, and error handling.

## Requirements Covered
- Create an Express server
- Build Student CRUD APIs
- Use modular routing
- Implement custom logger middleware
- Handle errors and status codes properly
- Test APIs with Postman or curl

## Project Structure

```bash
Assignment 2/
├── app.js
├── package.json
├── .gitignore
├── README.md
├── data/
│   └── students.js
├── middleware/
│   └── logger.js
└── routes/
    └── studentRoutes.js
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get a student by ID |
| POST | /students | Add a new student |
| PUT | /students/:id | Update student data |
| DELETE | /students/:id | Delete a student |

## Example Requests

### Get all students
```bash
GET http://localhost:3000/students
```

### Get one student
```bash
GET http://localhost:3000/students/1
```

### Add a student
```bash
POST http://localhost:3000/students
Content-Type: application/json

{
  "name": "David Lee",
  "age": 22,
  "course": "B.Tech"
}
```

### Update a student
```bash
PUT http://localhost:3000/students/2
Content-Type: application/json

{
  "name": "Bob Wilson",
  "age": 23,
  "course": "BSc IT"
}
```

### Delete a student
```bash
DELETE http://localhost:3000/students/3
```

## Status Codes Used
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## How to Run
```bash
cd "Assignment 2"
npm install
npm start
```

Then open:
```bash
http://localhost:3000/
```

## Host Link
NA

## Submission
- Project completed and stored in the repository
- GitHub link is submitted as required by the assignment instructions
- Host link field: NA

## Summary
This project demonstrates a complete and clean Express-based student management API using modular structure, middleware, and REST conventions.
