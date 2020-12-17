import db from './db';

const getAll = async () => {
  let result;
  try {
    result = await db.getAll();
  } catch (error) {
    result = error;
  }
  return result;
};
const get = async ({ id }) => {
  let result;
  try {
    if (!id) throw new Error('Error receiving identifier!!!');
    result = await db.get(id);
  } catch (error) {
    result = error;
  }
  return result;
};
const post = async ({ body }) => {
  let result;
  try {
    if (!body) throw new Error('Error receiving parameters!!!');
    result = await db.post(body);
  } catch (error) {
    result = error;
  }
  return result;
};
const put = async ({ id, params }) => {
  let result;
  try {
    if (!id && !params)
      throw new Error('Error receiving identifier and parameters!!!');
    result = await db.put(id, params);
  } catch (error) {
    result = error;
  }
  return result;
};
const del = async ({ id }) => {
  let result;
  try {
    if (!id) throw new Error('Error receiving identifier!!!');
    result = await db.del(id);
  } catch (error) {
    result = error;
  }
  return result;
};

export default {
  get,
  getAll,
  post,
  put,
  del,
};
