// eslint-disable-next-line no-unused-vars
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const xlsData = require('./src/routes/index.js')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/euclidean-distance-api', xlsData)
app.all('*', (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
)
app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
