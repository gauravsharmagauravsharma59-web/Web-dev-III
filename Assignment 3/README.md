# Inventory Management System

This is a simple inventory app made with Node.js and Express. It has a webpage to view and add products.

## Run

Open a terminal in this folder and run:

```bash
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## What it does

- Shows the products, quantity, price, and supplier
- Adds new products from the webpage
- Shows how many products are low in stock
- Saves inventory data in `data/inventory.json`

Low stock means fewer than 10 items.

## API

- `GET /inventory/items` — view all items
- `GET /inventory/items/:id` — view one item
- `POST /inventory/items` — add an item
- `PUT /inventory/items/:id` — edit an item
- `PATCH /inventory/items/:id/stock` — change stock
- `DELETE /inventory/items/:id` — remove an item
- `GET /inventory/low-stock` — view low-stock items
