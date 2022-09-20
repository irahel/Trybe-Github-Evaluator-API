import express from 'express';
import cors from 'cors';
import { renderTrybeCard } from './render';
import axios from 'axios';

const port = 3333;

const app = express()

app.use(express.json())
app.use(cors())

app.get('/:github_user', async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  const grade = await axios.get(`https://avaliadorgit.com/?github_user=${req.params.github_user}`)
  .then(res => res.data.grade);  
      
  return res.send(renderTrybeCard(grade));
});

app.listen(port, () => console.log(`TGS app listening on port ${port}!`));