// routes/item.route.ts
import { Router } from 'express';
import { 
  createItemController, 
  getAllItemsController, 
  getItemByIdController, 
  updateItemController, 
  deleteItemController 
} from '../controllers/item.controller';

const router = Router();

// Ensure controllers are async, but types match
router.post('/', async (req, res, next) => {
  try {
    await createItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await getAllItemsController(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get('/get/item/:id', async (req, res, next) => {
  try {
    await getItemByIdController(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await updateItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await deleteItemController(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
