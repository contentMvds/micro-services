import { Router } from 'express';
import { usersController } from './controller';

export const userRouter = () => {
  const userRouter = Router();
  userRouter.get('/users', (req, res) => {
    usersController()
      .getAll()
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  userRouter.get('/users/:id', (req, res) => {
    usersController()
      .get(req.params)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  userRouter.post('/users', (req, res) => {
    usersController()
      .post(req)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  userRouter.put('/users/:id', (req, res) => {
    usersController()
      .put(req.params, req.body)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  userRouter.delete('/users/:id', (req, res) => {
    usersController()
      .del(req.params)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  return userRouter;
};
