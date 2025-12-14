import mongoose, { Schema, Document } from 'mongoose';

export interface ISweet extends Document {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string; // New Field for Base64
}

const SweetSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0, default: 0 },
  image: { type: String, required: false } // Store Base64 string
}, { timestamps: true });

export default mongoose.model<ISweet>('Sweet', SweetSchema);