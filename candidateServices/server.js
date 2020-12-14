import { createServer } from 'http';
import dotenv from 'dotenv';
import { connect } from './config';
import { requestListener } from './src';

dotenv.config();

const server = createServer(requestListener);

server.listen(process.env.PORT, process.env.HOST, () => {
  const statusDB = connect();
  if (statusDB  !== 'success') {
    console.log('Erro ao conectar no banco de dados se o error persistir contate o administrador');
  }
  console.log(
    `Server is running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
