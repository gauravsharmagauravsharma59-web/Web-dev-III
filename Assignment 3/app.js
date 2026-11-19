const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('./middleware/logger');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/inventory', inventoryRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ message: err.message });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: 'SKU already exists' });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
});

if (require.main === module) {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/inventory-management';
  mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Unable to connect to MongoDB:', error.message);
      process.exitCode = 1;
    });
}

module.exports = app;
