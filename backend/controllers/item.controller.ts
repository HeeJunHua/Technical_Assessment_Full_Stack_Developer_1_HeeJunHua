// controllers/item.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as ItemService from '../services/item.service';

// Create an item
export const createItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price } = req.body;
    const newItem = await ItemService.createItem({ name, description, price });
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

// Get all items
export const getAllItemsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ItemService.getAllItems();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};

// Get an item by ID
export const getItemByIdController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const item = await ItemService.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    return res.status(200).json(item);
  } catch (err) {
    next(err);  // Ensure proper error handling
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an item
export const updateItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedItem = await ItemService.updateItem(req.params.id, req.body);
    res.status(200).json(updatedItem);
  } catch (err) {
    next(err);
  }
};

// Delete an item
export const deleteItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ItemService.deleteItem(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
