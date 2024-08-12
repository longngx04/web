//declare express server
const express = require('express')
const app = express()
//declare mongoose 
const mongoose = require('mongoose')

//connect to database
const db = 'mongodb://localhost:27017/cw'
mongoose.connect(db)
.then(() => console.log('connect to db succeed !'))
.catch((err) => console.log('connect to db failed !)' + err))

//declare body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//delcare CORS
const cors = require('cors')
app.use(cors())

//delcare router
const todoListRouter = require('./api/routes/todoListRouter')
//register routers
todoListRouter(app)

//declare server port
const port = 8888
app.listen(port)
console.log('Server is running at http://localhost:' + port)