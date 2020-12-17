import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import { config } from 'dotenv';

import { routers } from './src';
import { connect } from './config';

config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

connect();

routers(app);

app.listen(process.env.PORT, async () => {
  console.log(
    `Server is running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
