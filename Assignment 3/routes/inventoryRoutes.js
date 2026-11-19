const express = require('express');
const Product = require('../models/product');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};

function pickProductFields(data) {
  const fields = ['sku', 'name', 'category', 'price', 'quantity', 'reorderLevel', 'supplier'];
  return fields.reduce((product, field) => {
    if (data[field] !== undefined) {
      product[field] = data[field];
    }
    return product;
  }, {});
}

router.get('/', asyncHandler(async (req, res) => {
  const inventory = await Product.find();
  res.status(200).json({
    message: 'Inventory Data Management System API is running',
    inventory
  });
}));

router.get('/items', asyncHandler(async (req, res) => {
  const inventory = await Product.find();
  res.status(200).json(inventory);
}));

router.get('/items/:id', asyncHandler(async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  return res.status(200).json(item);
}));

router.get('/low-stock', asyncHandler(async (req, res) => {
  const threshold = req.query.threshold === undefined ? 10 : Number(req.query.threshold);
  if (!Number.isFinite(threshold) || threshold < 0) {
    return res.status(400).json({ message: 'Threshold must be a non-negative number' });
  }
  const lowStockItems = await Product.find({ quantity: { $lt: threshold } });
  res.status(200).json({ threshold, lowStockItems });
}));

router.post('/items', asyncHandler(async (req, res) => {
  const newItem = await Product.create(pickProductFields(req.body || {}));
  return res.status(201).json({ message: 'Item added successfully', item: newItem });
}));

router.put('/items/:id', asyncHandler(async (req, res) => {
  const item = await Product.findByIdAndUpdate(req.params.id, pickProductFields(req.body || {}), {
    new: true,
    runValidators: true
  });
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  return res.status(200).json({ message: 'Item updated successfully', item });
}));

router.patch('/items/:id/stock', asyncHandler(async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const quantityDelta = Number(req.body.quantity);
  if (Number.isNaN(quantityDelta) || !Number.isFinite(quantityDelta)) {
    return res.status(400).json({ message: 'A valid quantity value is required' });
  }

  item.quantity = Math.max(0, item.quantity + quantityDelta);
  await item.save();
  return res.status(200).json({
    message: 'Stock updated successfully',
    item
  });
}));

router.delete('/items/:id', asyncHandler(async (req, res) => {
  const item = await Product.findByIdAndDelete(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  return res.status(200).json({ message: 'Item deleted successfully', item });
}));

module.exports = router;
