import axios from 'axios';
import jwt from 'jsonwebtoken';

export const authController = () => {

  const sign = async ({ body }) => {
    try {
      if (!body) throw new Error('Paramenter nos found');

      const result = await axios({
        url: '127.0.0.1',
        method: 'post',
        data: {
          data: body
        }
      });
      console.log('retorno do request', result);

      if (result) {
        const token = jwt.sign({
          id: result._id
        },'secretPublicKey', {
          expiresIn: '3h'
        });
        return token;
      }
      throw new Error('Usuario não encontrado');
    } catch (error) {
      return error.message
    }
  };

  const check = async ({ id }) => {
    try {
      if (!id) throw new Error('Paramenter nos found');
      const decoded = jwt.verify(id, 'secretPublicKey');
      console.log('decoded in check', decoded);
      // verificar se não expirou
      // Fazer request para verificar se o usuario existe
      // Caso estas duas condições estejam ok retorna true;
      
    } catch (error) {
      return error.message
    }
  };

  return {
    sign,
    check
  }
}