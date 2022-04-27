const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { join } = require('path')

const euclideanDistanceRoutes = require('./src/routes/index.js')

const app = express()
app.set('port', process.env.PORT || 8080)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/euclidean-distance-api', euclideanDistanceRoutes)
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, './', 'index.html'))
})
app.all('*', (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
)
app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
