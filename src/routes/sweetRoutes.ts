import { Router } from 'express';
import { getSweets, addSweet, updateSweet, deleteSweet, purchaseSweet } from '../controllers/sweetController';
import { authenticate, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

// ✅ PUBLIC ROUTE: Guests can now see the sweets!
router.get('/', getSweets); 

// Protected routes (User must be logged in to buy)
router.post('/:id/purchase', authenticate, purchaseSweet);

// Admin only routes
router.post('/', authenticate, requireAdmin, addSweet);
router.put('/:id', authenticate, requireAdmin, updateSweet);
router.delete('/:id', authenticate, requireAdmin, deleteSweet);

export default router;