import { STATUS_CODES } from 'http';
import { parse } from 'url';
export const requestListener = function (req, res) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Content-Type': 'application/json',
  };
  res.writeHead(200, headers);
  //   const { pathname } = parse(req.url, true);
  const { method } = req;
  if (method === 'GET') {
    const { query } = parse(req.url, true);
    console.log(query);
    res.writeHead(200);
    return res.end('Hello Word Get');
  }
  if (method === 'POST') {
    return res.end('Method post');
  }
  if (method === 'PUT') {
    return res.end('Method put');
  }
  if (method === 'DELETE') {
    //TODO: DELETE logic
    return res.end('Method del');
  }
  return res.end(`{"error": "${STATUS_CODES[404]}"}`);
};
