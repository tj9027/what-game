require('dotenv').config();
const port = process.env.PORT || 3000;

const express = require('express');
const server = express();
const router = require('./routers/router');

server.use(express.json());
server.use(router);
server.listen(port, () => {
  console.log(`server running on port ${port} 🚀`);
});
