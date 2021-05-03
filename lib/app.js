// import dependencies
import express from 'express';
import cors from 'cors';
import cats from '../data/cats.js';


// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('Hello Zach!');
});

// API routes for cats
app.get('/api/cats', (req, res) => {
  res.json(cats);
});

app.get('/api/cats/1', (req, res) => {
  res.json(cats[0]);
});
export default app;