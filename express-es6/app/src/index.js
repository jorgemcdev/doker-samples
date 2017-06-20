import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) => {
  res.send('index.html');
});

app.get('/hello', (req,res) => {
  res.send(process.env.NODE_ENV);
});

app.listen(3000, (err) => {
  if(err) console.log('Server Error')
  console.log('Server Started :',process.env.NODE_ENV);
})
