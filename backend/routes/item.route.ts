import { Router } from 'express';
import {
  createItemController,
  getAllItemsController,
  getItemByIdController,
  updateItemController,
  deleteItemController,
} from '../controllers/item.controller';
import { validateRequest } from '../middlewares/validateRequest';
import { createItemValidator, updateItemValidator } from '../validators/itemValidator';

const router = Router();

// Create Item
router.post('/', validateRequest(createItemValidator), async (req, res, next) => {
  try {
    await createItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Get All Items
router.get('/', async (req, res, next) => {
  try {
    await getAllItemsController(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Get Item by ID
router.get('/:id', async (req, res, next) => {
  try {
    await getItemByIdController(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Update Item
router.put('/:id', validateRequest(updateItemValidator), async (req, res, next) => {
  try {
    await updateItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Delete Item
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
