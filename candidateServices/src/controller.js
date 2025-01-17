import { candidateModel } from './model';

export const candidateController = () => {
  const getAll = async () => {
    let result;
    try {
      result = await candidateModel.find().exec();
    } catch (error) {
      result = error;
    }
    return result;
  };
  const get = async ({ id }) => {
    let result;
    try {
      if (!id) throw new Error('Error receiving identifier!!!');
      result = await candidateModel.findById({ id: _id }).exec();
    } catch (error) {
      result = error.message;
    }
    return result;
  };
  const post = async ({ body }) => {
    let result;
    try {
      if (!body) throw new Error('Error receiving parameters!!!');
      result = await candidateModel.create(body);
    } catch (error) {
      result = error.message;
    }
    return result;
  };
  const put = async (id, params) => {
    let result;
    try {
      if (!id && !params)
        throw new Error('Error receiving identifier and parameters!!!');
      result = await candidateModel
        .findOneAndUpdate({ _id: id }, params, { new: true })
        .exec();
    } catch (error) {
      result = error.message;
    }
    return result;
  };
  const del = async ({ id }) => {
    let result;
    try {
      if (!id) throw new Error('Error receiving identifier!!!');
      result = await candidateModel.deleteOne({id: _id }).exec();
    } catch (error) {
      result = error.message;
    }
    return result;
  };

  return {
    get,
    getAll,
    post,
    put,
    del,
  };
};
