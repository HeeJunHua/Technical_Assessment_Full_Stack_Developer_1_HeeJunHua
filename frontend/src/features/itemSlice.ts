import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
  description?: string;
  price: number;
}

interface ItemState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('http://localhost:3000/api/items');
  return response.data;
});

export const addItem = createAsyncThunk('items/addItem', async (newItem: Omit<Item, 'id'>) => {
  const response = await axios.post('http://localhost:3000/api/items', newItem);
  return response.data;
});

export const updateItem = createAsyncThunk('items/updateItem', async (item: Item) => {
  const response = await axios.put(`http://localhost:3000/api/items/${item.id}`, item);
  return response.data;
});

export const deleteItem = createAsyncThunk('items/deleteItem', async (id: number) => {
  await axios.delete(`http://localhost:3000/api/items/${id}`);
  return id;
});

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load items';
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default itemSlice.reducer;
