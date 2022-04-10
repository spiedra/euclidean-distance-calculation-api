// eslint-disable-next-line no-unused-vars
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const xlsData = require('./src/routes/index.js')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json())

app.use('/calculation', xlsData)
app.get('/', (req, res, next) =>
  res.send('Welcome to the Euclidean Distance Calculation API!')
)
app.all('*', (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
)
app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
