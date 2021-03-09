global.mongoose = require('mongoose')
const express = require('express')

const app = express()


app.use(express.json())

//temp link for testing puroposes
const dbCloudUrl ='mongodb+srv://Rebecca:hej123@cluster0.sk4ko.mongodb.net/ClearBnB?retryWrites=true&w=majority'


mongoose.connect(dbCloudUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const rest = require('./rest.js')
rest(app, dbCloudUrl)



app.listen(3001)
