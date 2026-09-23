const express = require('express');
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Student Management REST API',
    endpoints: [
      'GET /students',
      'GET /students/:id',
      'POST /students',
      'PUT /students/:id',
      'DELETE /students/:id'
    ]
  });
});

app.use(studentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
