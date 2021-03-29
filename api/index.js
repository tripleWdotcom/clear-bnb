global.mongoose = require('mongoose')
const express = require('express')
const models = require('./models.js')
//-----------------------------
global.session = require('express-session');
global.crypto = require('crypto');
global.ConnectMongo = require('connect-mongo').default;
//-------------------------------------------

const app = express()
app.use(express.json())

const dbCloudUrl = 'mongodb+srv://Rebecca:hej123@cluster0.sk4ko.mongodb.net/clearbnbTest?retryWrites=true&w=majority'

mongoose.connect(dbCloudUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const auth = require('./auth.js');
const rest = require('./rest.js');

rest(app, models)
auth(app,models,dbCloudUrl)
app.listen(3001, () => { console.log('Server started on port 3001') })