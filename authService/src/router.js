import { Router } from 'express';
import { authController } from './controller';

export const authRouter = () => {
  const router = Router();
 
  router.get('/token/check/:id', (req, res) => {
    authController()
      .check(req.params)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  router.post('/token/sign', (req, res) => {
    authController()
      .sign(req)
      .then((response) => {
        res.end(JSON.stringify(response));
      })
      .catch((err) => res.end(err));
  });
  return candRouter;
};
