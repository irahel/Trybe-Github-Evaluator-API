import express from 'express';
import cors from 'cors';
import { renderTrybeCard } from './render';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/:github_user', async (req, res) => {
    /*const grade = axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      }
        )
        */
    const grade = 70;    
    return res.send(renderTrybeCard(grade));
});

app.listen(3333)