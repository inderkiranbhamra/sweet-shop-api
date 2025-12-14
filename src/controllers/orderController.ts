import { Request, Response } from 'express';
import Order from '../models/Order';
import Sweet from '../models/Sweet';

interface AuthRequest extends Request {
  user?: any;
}

// Create Order (Checkout)
export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { items, totalAmount } = req.body;
    
    // 1. Verify Stock & Deduct
    for (const item of items) {
      const sweet = await Sweet.findById(item.sweet);
      if (!sweet || sweet.quantity < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for ${item.name}` });
      }
      sweet.quantity -= item.quantity;
      await sweet.save();
    }

    // 2. Create Order
    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount,
      status: 'COMPLETED'
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Checkout failed' });
  }
};

// Get My Orders
export const getMyOrders = async (req: AuthRequest, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Admin: Get All Orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('user', 'email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};