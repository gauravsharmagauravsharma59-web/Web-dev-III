# Inventory Data Management System

A simple Express.js API for managing an inventory of products, stock, suppliers, and pricing.

## Features
- View all inventory items
- Get an item by ID
- Add new inventory items
- Update item details
- Delete items
- Update stock by quantity change
- Check low stock products

## Run
```bash
cd "Assignment 3"
npm install
npm start
```

Open:
```bash
http://localhost:3000/
```

## Sample Response
```json
{
  "message": "Inventory Data Management System",
  "endpoints": [
    "GET /inventory",
    "GET /inventory/items",
    "GET /inventory/items/:id",
    "GET /inventory/low-stock",
    "POST /inventory/items",
    "PUT /inventory/items/:id",
    "PATCH /inventory/items/:id/stock",
    "DELETE /inventory/items/:id"
  ]
}
```

## Example Requests

### Add item
```bash
curl -X POST http://localhost:3000/inventory/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Monitor",
    "category": "Electronics",
    "quantity": 12,
    "price": 15000,
    "supplier": "Display Hub"
  }'
```

### Update stock
```bash
curl -X PATCH http://localhost:3000/inventory/items/1/stock \
  -H "Content-Type: application/json" \
  -d '{ "quantity": -3 }'
```

### View low stock items
```bash
curl http://localhost:3000/inventory/low-stock?threshold=10
```

## Technology Stack
- Node.js
- Express.js
- JSON file storage

## Assignment Status
- ✅ CRUD inventory API implemented
- ✅ Stock update logic added
- ✅ Low-stock reporting added
- ✅ Express middleware integrated
