const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const db = require('./models')

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})