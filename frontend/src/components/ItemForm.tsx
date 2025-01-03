import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../features/itemSlice';
import { AppDispatch } from '../store'; // Import AppDispatch to type dispatch correctly

interface ItemFormProps {
  existingItem?: { id: number; name: string; description?: string; price: number };
}

const ItemForm: React.FC<ItemFormProps> = ({ existingItem }) => {
  const dispatch = useDispatch<AppDispatch>(); // Type dispatch
  const [name, setName] = useState(existingItem?.name || '');
  const [description, setDescription] = useState(existingItem?.description || '');
  const [price, setPrice] = useState<number>(existingItem?.price || 0); // Ensure price is a number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const item = { 
      id: existingItem?.id ?? 0, // Make sure id exists for update or create new item
      name, 
      description, 
      price 
    };

    if (existingItem) {
      dispatch(updateItem(item)); // Dispatch update
    } else {
      dispatch(addItem({ name, description, price })); // Dispatch create
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Description</label>
        <textarea
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Price</label>
        <input
          type="number"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))} // Ensure price is always a number
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {existingItem ? 'Update Item' : 'Create Item'}
      </button>
    </form>
  );
};

export default ItemForm;
