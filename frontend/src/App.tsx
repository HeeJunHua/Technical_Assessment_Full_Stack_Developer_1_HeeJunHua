import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for an Item
interface Item {
  id: number;
  name: string;
  description?: string;
  price: number;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: 0 });
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  // Fetch all items from the backend
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Create a new item
  const createItem = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/items', newItem);
      setItems((prevItems) => [...prevItems, response.data]);
      setNewItem({ name: '', description: '', price: 0 }); // Clear form
    } catch (error) {
      console.error('Error creating item', error);
    }
  };

  // Update an item
  const updateItem = async () => {
    if (editingItem) {
      try {
        const response = await axios.put(`http://localhost:3000/api/items/${editingItem.id}`, editingItem);
        setItems((prevItems) =>
          prevItems.map((item) => (item.id === editingItem.id ? response.data : item))
        );
        setEditingItem(null); // Clear editing state
      } catch (error) {
        console.error('Error updating item', error);
      }
    }
  };

  // Delete an item
  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/items/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  return (
    <div>
      <h1>Item Management</h1>
      
      {/* Create Item Form */}
      <h2>Create Item</h2>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
      />
      <input
        type="text"
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        placeholder="Item Description"
      />
      <input
        type="number"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        placeholder="Item Price"
      />
      <button onClick={createItem}>Create</button>

      {/* Update Item Form */}
      {editingItem && (
        <>
          <h2>Update Item</h2>
          <input
            type="text"
            value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
            placeholder="Item Name"
          />
          <input
            type="text"
            value={editingItem.description || ''}
            onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
            placeholder="Item Description"
          />
          <input
            type="number"
            value={editingItem.price}
            onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
            placeholder="Item Price"
          />
          <button onClick={updateItem}>Update</button>
        </>
      )}

      {/* Display All Items */}
      <h2>All Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => setEditingItem(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
