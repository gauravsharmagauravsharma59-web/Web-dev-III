const inventoryTable = document.getElementById('inventoryTable');
const totalItems = document.getElementById('totalItems');
const lowStockCount = document.getElementById('lowStockCount');
const totalValue = document.getElementById('totalValue');
const itemForm = document.getElementById('itemForm');
const message = document.getElementById('message');

async function loadInventory() {
  try {
    const response = await fetch('/inventory/items');
    const items = await response.json();

    inventoryTable.innerHTML = items.map(item => {
      const stockClass = item.quantity < 10 ? 'low-stock' : '';
      return `
        <tr>
          <td>${item.id}</td>
          <td>${item.sku}</td>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td class="${stockClass}">${item.quantity}</td>
          <td>₹${Number(item.price).toLocaleString('en-IN')}</td>
          <td>${item.supplier}</td>
        </tr>
      `;
    }).join('');

    totalItems.textContent = items.length;
    lowStockCount.textContent = items.filter(item => item.quantity < 10).length;
    totalValue.textContent = `₹${items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0).toLocaleString('en-IN')}`;
  } catch (error) {
    inventoryTable.innerHTML = '<tr><td colspan="7">Unable to load inventory data.</td></tr>';
  }
}

itemForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(itemForm);
  const payload = {
    sku: formData.get('sku'),
    name: formData.get('name'),
    category: formData.get('category'),
    quantity: Number(formData.get('quantity')),
    price: Number(formData.get('price')),
    supplier: formData.get('supplier')
  };

  try {
    const response = await fetch('/inventory/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to add item');
    }

    message.textContent = 'Item added successfully.';
    message.className = 'status success';
    itemForm.reset();
    await loadInventory();
  } catch (error) {
    message.textContent = error.message;
    message.className = 'status error';
  }
});

loadInventory();
