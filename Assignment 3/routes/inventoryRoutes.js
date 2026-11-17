const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFilePath = path.join(__dirname, '..', 'data', 'inventory.json');

function readInventory() {
  const raw = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(raw);
}

function writeInventory(items) {
  fs.writeFileSync(dataFilePath, JSON.stringify(items, null, 2));
}

function validateItem(data, isUpdate = false) {
  const item = data || {};

  if (!isUpdate) {
    if (!item.name || !item.category || !item.supplier) {
      return 'Name, category and supplier are required';
    }
  }

  if (item.name !== undefined && (!String(item.name).trim())) {
    return 'Name cannot be empty';
  }

  if (item.category !== undefined && (!String(item.category).trim())) {
    return 'Category cannot be empty';
  }

  if (item.supplier !== undefined && (!String(item.supplier).trim())) {
    return 'Supplier cannot be empty';
  }

  if (item.quantity !== undefined) {
    const quantity = Number(item.quantity);
    if (Number.isNaN(quantity) || !Number.isInteger(quantity) || quantity < 0) {
      return 'Quantity must be a non-negative integer';
    }
  }

  if (item.price !== undefined) {
    const price = Number(item.price);
    if (Number.isNaN(price) || price <= 0) {
      return 'Price must be a positive number';
    }
  }

  return null;
}

router.get('/', (req, res) => {
  const inventory = readInventory();
  res.status(200).json({
    message: 'Inventory Data Management System API is running',
    inventory
  });
});

router.get('/items', (req, res) => {
  const inventory = readInventory();
  res.status(200).json(inventory);
});

router.get('/items/:id', (req, res) => {
  const inventory = readInventory();
  const itemId = Number(req.params.id);
  const item = inventory.find((entry) => entry.id === itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  return res.status(200).json(item);
});

router.get('/low-stock', (req, res) => {
  const inventory = readInventory();
  const threshold = Number(req.query.threshold) || 10;
  const lowStockItems = inventory.filter((item) => item.quantity < threshold);

  res.status(200).json({ threshold, lowStockItems });
});

router.post('/items', (req, res) => {
  const inventory = readInventory();
  const validationError = validateItem(req.body);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const newItem = {
    id: inventory.length ? inventory[inventory.length - 1].id + 1 : 1,
    name: String(req.body.name).trim(),
    category: String(req.body.category).trim(),
    quantity: Number(req.body.quantity ?? 0),
    price: Number(req.body.price),
    supplier: String(req.body.supplier).trim()
  };

  inventory.push(newItem);
  writeInventory(inventory);

  return res.status(201).json({ message: 'Item added successfully', item: newItem });
});

router.put('/items/:id', (req, res) => {
  const inventory = readInventory();
  const itemId = Number(req.params.id);
  const itemIndex = inventory.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const validationError = validateItem(req.body, true);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const updatedItem = {
    ...inventory[itemIndex],
    name: req.body.name !== undefined ? String(req.body.name).trim() : inventory[itemIndex].name,
    category: req.body.category !== undefined ? String(req.body.category).trim() : inventory[itemIndex].category,
    quantity: req.body.quantity !== undefined ? Number(req.body.quantity) : inventory[itemIndex].quantity,
    price: req.body.price !== undefined ? Number(req.body.price) : inventory[itemIndex].price,
    supplier: req.body.supplier !== undefined ? String(req.body.supplier).trim() : inventory[itemIndex].supplier
  };

  inventory[itemIndex] = updatedItem;
  writeInventory(inventory);

  return res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
});

router.patch('/items/:id/stock', (req, res) => {
  const inventory = readInventory();
  const itemId = Number(req.params.id);
  const item = inventory.find((entry) => entry.id === itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const quantityDelta = Number(req.body.quantity);

  if (Number.isNaN(quantityDelta) || !Number.isFinite(quantityDelta)) {
    return res.status(400).json({ message: 'A valid quantity value is required' });
  }

  const updatedQuantity = Math.max(0, item.quantity + quantityDelta);
  item.quantity = updatedQuantity;
  writeInventory(inventory);

  return res.status(200).json({
    message: 'Stock updated successfully',
    item
  });
});

router.delete('/items/:id', (req, res) => {
  const inventory = readInventory();
  const itemId = Number(req.params.id);
  const itemIndex = inventory.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const [deletedItem] = inventory.splice(itemIndex, 1);
  writeInventory(inventory);

  return res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
});

module.exports = router;
