import { userModel } from './model';

export const usersController = () => {
  const getAll = async () => {
    let result;
    try {
      result = await userModel.find().exec();
    } catch (error) {
      result = error;
    }
    return result;
  };
  const get = async ({ id }) => {
    let result;
    try {
      if (!id) throw new Error('Error receiving identifier!!!');
      result = await userModel.findById({ id: _id }).exec();
    } catch (error) {
      result = error.message;
    }
    return result;
  };
  const post = async ({ body }) => {
    let result;
    try {
      if (!body) throw new Error('Error receiving parameters!!!');
      result = await userModel.create(body);
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
      result = await userModel
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
      result = await userModel.deleteOne({id: _id }).exec();
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
