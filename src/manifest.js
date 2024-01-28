import 'dotenv/config'

import http from 'http';
import app from './http/index'

const port = process.env.PORT
const server = http.createServer(app.callback());

server.listen(port, () => {
  console.log(`React server listening on port ${port}`);
});
