import express from 'express'

const app = express()

app.use(cors())

app.get('/:github_user', async (req, res) => {
    /*const grade = axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      }
        )
        */
    const grade = 70;

    return ;
});

app.listen(3333)