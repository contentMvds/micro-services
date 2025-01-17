import { Router } from 'express';
import { candidateController } from './controller';

export const candidateRouter = () => {
  const candRouter = Router();
  candRouter.get('/candidates', (req, res) => {
    candidateController()
      .getAll()
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  candRouter.get('/candidate/:id', (req, res) => {
    candidateController()
      .get(req.params)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  candRouter.post('/candidate', (req, res) => {
    candidateController()
      .post(req)
      .then((response) => {
        res.end(JSON.stringify(response));
      })
      .catch((err) => res.end(err));
  });
  candRouter.put('/candidate/:id', (req, res) => {
    candidateController()
      .put(req.params, req.body)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });
  candRouter.delete('/candidate/:id', (req, res) => {
    candidateController()
      .del(req.params)
      .then((response) => res.end(JSON.stringify(response)))
      .catch((err) => res.end(err));
  });

  return candRouter;
};
