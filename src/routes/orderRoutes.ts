import { Router } from 'express';
import { createOrder, getMyOrders, getAllOrders } from '../controllers/orderController';
import { authenticate, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authenticate, createOrder);
router.get('/my-orders', authenticate, getMyOrders);
router.get('/admin-all', authenticate, requireAdmin, getAllOrders);

export default router;