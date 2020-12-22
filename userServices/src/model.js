import mongoose from 'mongoose';

export const userModel = mongoose.model(
  'users',
  new mongoose.Schema({
    name: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    password: { type: String, default: '', required: true },
    data: { type: Date, default: Date.now() },
  })
);
