require('dotenv').config();
const express = require('express');
const server = express();
const router = express.Router();
const port = process.env.PORT || 3000;

server.use(express.json());

server.listen(port, () => {
  console.log(`server running on port ${port} 🚀`);
});
