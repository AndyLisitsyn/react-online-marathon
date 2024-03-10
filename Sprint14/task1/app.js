import express from 'express';
const app = express();
import opt from 'optimist';

app.get('/', (req, res) => {
  const argv = opt.argv;

  const timer = setInterval(() => {
    console.log(new Date().toLocaleString());
  }, argv.i);

  setTimeout(() => {
    clearInterval(timer);
    res.send(new Date().toLocaleString());
  }, argv.t);
})

app.listen(3000);
