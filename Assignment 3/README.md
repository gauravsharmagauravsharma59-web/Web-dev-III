# Inventory Management System

This project is a small inventory app built with Node.js and Express. It has a browser dashboard for viewing and adding products, and an API for managing inventory records. The data is saved in `data/inventory.json`.

## Run the project

Open a terminal in this folder and run:

```bash
npm install
npm start
```

Keep the terminal open while the server is running, then visit [http://localhost:3000](http://localhost:3000).

If port 3000 is already in use, stop the other server using it before running `npm start`.

## Using the dashboard

The dashboard displays the inventory list, the number of items, low-stock count, and total inventory value. Use the form to add a product. The list and totals refresh after it is added.

An item includes a name, category, quantity, price, and supplier. Items with fewer than 10 units are counted as low stock.

## API routes

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/inventory/items` | Get all items |
| `GET` | `/inventory/items/:id` | Get one item |
| `GET` | `/inventory/low-stock?threshold=10` | List items below the chosen quantity |
| `POST` | `/inventory/items` | Add an item |
| `PUT` | `/inventory/items/:id` | Update an item's details |
| `PATCH` | `/inventory/items/:id/stock` | Change an item's stock quantity |
| `DELETE` | `/inventory/items/:id` | Delete an item |

### Add an item

Send a `POST` request to `/inventory/items` with a JSON body:

```json
{
  "name": "Monitor",
  "category": "Electronics",
  "quantity": 12,
  "price": 15000,
  "supplier": "Display Hub"
}
```

### Change stock

Send a `PATCH` request to `/inventory/items/1/stock`. A positive quantity adds stock; a negative quantity removes it:

```json
{
  "quantity": -3
}
```

## Project files

- `app.js` starts the Express server and serves the dashboard.
- `public/` contains the dashboard page and its browser-side script.
- `routes/inventoryRoutes.js` contains the inventory API routes.
- `data/inventory.json` stores the sample inventory.
- `middleware/logger.js` logs incoming requests.
