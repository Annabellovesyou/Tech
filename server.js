const express = require('express')
const app = express()
const port = 8000

app
  .use('/static', express.static('static'))

  app.get('/profile/:username', (req, res) => {
    const username = req.params.username

    res.send(`
      <h1>Welkom op het profiel van ${username}</h1>
      <img src="/static/images/annabel.png" alt="Profiel afbeelding">
  `);
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile/:username', (req, res) => {
    const username = req.params.username
      res.send(`Dit is het profiel van ${req.params.username}`)
    })

  app.get('/login', (req, res) => {
      res.send('log in!')
    })

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`)
})

app.use((req, res) => {
  res.status(404).send('404 - Deze pagina bestaat niet')
})


