import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  items: {
    sweet: mongoose.Schema.Types.ObjectId; // Reference to Sweet
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  createdAt: Date;
}

const OrderSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      sweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Sweet' },
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'COMPLETED' }
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);