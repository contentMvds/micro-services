import db from './db';

const getAll = () => {
  let result;
  try {
    result = await db.getAll();
  } catch (error) {
    result = error;
  }
  return result;
};
const get = async (param) => {
  let result;
  try {
    result = await db.get(id);
  } catch (error) {
    result = error;
  }
  return result;
};
const post = (param) => {
  let result;
  try {
    result = await db.post(param);

  } catch (error) {
    result = error;
  }
  return result;
};
const put = (param) => {
  let result;
  try {
    result = await db.put(id, param);
  } catch (error) {
    result = error;
  }
  return result;
};
const del = (param) => {
  let result;
  try {
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
  del
}