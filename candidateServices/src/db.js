import mongoose from 'mongoose';

const schema = mongoose.model(
  'cadidates',
  new mongoose.Schema({
    name: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    skill: { type: [Object], default: {}, required: true },
    needs: { type: [Object], default: {} },
  })
);

const cadidateDB = () => {};
const candidatesDB = () => {};
const createCandidatesDB = () => {};
const updateCondidatesDB = () => {};
const deleteCondidatesDB = () => {};
