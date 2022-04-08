import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next)=> res.send('Welcome to the Euclidean Distance Calculation API'))

app.listen(app.get('port'), () => {
    console.log(`Server on port: http://localhost:${app.get('port')}`);
})