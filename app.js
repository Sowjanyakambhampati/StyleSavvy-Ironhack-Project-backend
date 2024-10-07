// require("dotenv").config();
// const jsonServer = require("json-server");
// const morgan = require("morgan");
//
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const PORT = process.env.PORT || 5000;
//
// server.use(middlewares);
// server.use(morgan("dev"));
// server.use((req, res, next) => {
//   // Middleware to disable CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// server.use(router);
//
// server.listen(PORT, () => {
//   console.log(`JSON Server is running at port ${PORT}`);
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to disable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;