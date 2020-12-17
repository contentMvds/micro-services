import controller from './controller';

export const routers = (app) => {
  app.get('/', (req, res) => {
    controller
      .getAll()
      .then((response) => {
        res.end(JSON.stringify(response));
      })
      .catch((err) => res.end(err));
  });
  app.get('/:id', (req, res) => {
    controller
      .get(query)
      .then((response) => response.json())
      .then((values) => res.end(values))
      .catch((err) => res.end(err));
  });

  app.post('/', (req, res) => {
    controller
      .post(req)
      .then((response) => {
        console.log('response', response);
        res.end(JSON.stringify(response));
      })
      .catch((err) => res.end(err));
  });
  app.put('/:id', (req, res) => {
    controller
      .put(query)
      .then((response) => response.json())
      .then((values) => res.end(values))
      .catch((err) => res.end(err));
  });
  app.delete('/:id', (req, res) => {
    controller
      .put(query)
      .then((response) => response.json())
      .then((values) => res.end(values))
      .catch((err) => res.end(err));
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  return app;
};
