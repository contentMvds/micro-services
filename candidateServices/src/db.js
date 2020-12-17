import mongoose from 'mongoose';

const schema = mongoose.model(
  'cadidates',
  new mongoose.Schema(
    {
      name: { type: String, default: '', required: true },
      email: { type: String, default: '', required: true },
      skill: { type: Array, default: {}, required: true },
      needs: { type: Array, default: {} },
      data: { type: Date, default: Date.now() },
    }
  )
);

const candidatesDB = async () => {
  const result = await schema.find().exec();
  return result;
};
const candidateDB = async (_id) => {
  if (!_id) throw new Error('Identifier not found get');
  const result = await schema.findById({ _id }).exec();
  return result;
};
const createCandidatesDB = async (obj) => {
  console.log('obj', obj.name);
  if (!obj) throw new Error('register not found create');
  let result;
  try {
    result = await schema.create(obj);
  } catch (error) {
    result = error;
  }
  return result;
};
const updateCondidatesDB = async (_id, obj) => {
  if (!_id || !obj) throw new Error('Parameters not found in upadate');
  result = await schema.updateOne({ _id }, obj).exec();
  return result;
};
const deleteCondidatesDB = async (_id) => {
  if (!_id) throw new Error('Identifier not found in delete');
  result = await schema.deleteOne({ _id }).exec();
  return result;
};

export default {
  get: candidateDB,
  getAll: candidatesDB,
  post: createCandidatesDB,
  pull: updateCondidatesDB,
  del: deleteCondidatesDB,
};
