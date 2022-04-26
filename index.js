const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const euclideanDistanceRoutes = require('./src/routes/index.js')

const app = express()
app.set('port', process.env.PORT || 8080)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/euclidean-distance-api', euclideanDistanceRoutes)
app.get('/', (req, res, next) => res.send('Welcome to the Eucludean Distance API'))
app.all('*', (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
)
app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
