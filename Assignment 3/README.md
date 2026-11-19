# Inventory Management System

This is a simple inventory app made with Node.js, Express, and MongoDB. Mongoose stores and validates product records.

## Run

Start a MongoDB server, then open a terminal in this folder and run:

```bash
npm install
npm start
```

The app connects to `mongodb://127.0.0.1:27017/inventory-management` by default. Set `MONGODB_URI` to use a different MongoDB connection string.

Then open http://localhost:3000 in your browser.

## What it does

- Shows the products, quantity, price, and supplier
- Adds new products from the webpage
- Shows how many products are low in stock
- Saves inventory data in MongoDB

Low stock means fewer than 10 items.

## API

- `GET /inventory/items` — view all items
- `GET /inventory/items/:id` — view one item
- `POST /inventory/items` — add an item
- `PUT /inventory/items/:id` — edit an item
- `PATCH /inventory/items/:id/stock` — change stock
- `DELETE /inventory/items/:id` — remove an item
- `GET /inventory/low-stock` — view low-stock items

New products require a unique SKU, name, category, price, and supplier. Quantity defaults to zero.
