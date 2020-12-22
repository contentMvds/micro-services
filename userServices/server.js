import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';

import { userRouter } from './src/router';
import { connect } from './config';

config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

connect();

app.use(userRouter())

app.listen(process.env.PORT, async () => {
  console.log(
    `Server is running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
