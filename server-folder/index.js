const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

//setting up the body Parser
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

//setting up cors
app.use(cors())


const PORT = process.env.PORT || 8000




//Connecting to Mongoose
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=>{
  console.log('Sever is up and running')
}))
.catch((error)=>console.log(error))

mongoose.set(`strictQuery`, false)