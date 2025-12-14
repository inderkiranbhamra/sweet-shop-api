import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password?: string;
  googleId?: string;
  role: 'ADMIN' | 'CUSTOMER';
  otp?: string;
  otpExpires?: Date;
  // NEW: Fields for password reset
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  role: { type: String, enum: ['ADMIN', 'CUSTOMER'], default: 'CUSTOMER' },
  otp: { type: String },
  otpExpires: { type: Date },
  // NEW: Schema definitions
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);