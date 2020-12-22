import mongoose from 'mongoose';

export const candidateModel = mongoose.model(
  'cadidates',
  new mongoose.Schema({
    name: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    skill: { type: Array, default: {}, required: true },
    needs: { type: Array, default: {} },
    data: { type: Date, default: Date.now() },
  })
);
