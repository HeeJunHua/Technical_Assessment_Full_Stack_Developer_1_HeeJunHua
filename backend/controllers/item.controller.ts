// controllers/item.controller.ts
import { Request, Response, NextFunction } from 'express';
import { Item } from '../models/Item';
import { createItemValidator, updateItemValidator } from '../validators/itemValidator';
import Joi from 'joi';

// Create an item
export const createItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the request body
    await createItemValidator.validateAsync(req.body);

    const { name, description, price } = req.body;
    const newItem = await Item.create({ name, description, price });

    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

// Get all items
export const getAllItemsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.findAll(); // Fetch items from the database
    res.status(200).json(items); // Send response as JSON
  } catch (err) {
    next(err); // Pass errors to error handler
  }
};

export const getItemByIdController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    return res.status(200).json(item);
  } catch (error) {
    next(error);
    return res.status(500).json({ message: 'Error fetching item by ID' });
  }
};

export const updateItemController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.price = req.body.price || item.price;

    await item.save();
    return res.status(200).json(item);
  } catch (error) {
    next(error);
    return res.status(500).json({ message: 'Error updating item' });
  }
};

export const deleteItemController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.destroy();
    return res.status(204).json({ message: 'Item deleted successfully' });
  } catch (error) {
    next(error);
    return res.status(500).json({ message: 'Error deleting item' });
  }
};