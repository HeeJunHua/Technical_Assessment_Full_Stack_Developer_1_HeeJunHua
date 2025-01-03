// services/item.service.ts
import { Item } from '../models/Item';

export const createItem = async (data: { name: string; description?: string; price: number }) => {
  return await Item.create(data);
};

export const getAllItems = async () => {
  return await Item.findAll();
};

export const getItemById = async (id: string) => {
  return await Item.findByPk(id);
};

export const updateItem = async (id: string, data: Partial<{ name: string; description: string; price: number }>) => {
  const item = await Item.findByPk(id);
  if (!item) throw new Error('Item not found');
  await item.update(data);
  return item;
};

export const deleteItem = async (id: string) => {
  const item = await Item.findByPk(id);
  if (!item) throw new Error('Item not found');
  await item.destroy();
};
