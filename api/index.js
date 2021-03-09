global.mongoose = require('mongoose')
const express = require('express')

const app = express()


app.use(express.json())

//temp link for testing puroposes
const dbCloudUrl ='mongodb+srv://Rebecca:hej123@cluster0.sk4ko.mongodb.net/clearbnbTest?retryWrites=true&w=majority'


mongoose.connect(dbCloudUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// load models
const models = require('./models.js')
let wifi = new models['features']({
  index:1,
  name: 'wifi'
})

//wifi.save()

const test=[
  {
    id: 1,
    name: 'jack',
    number: '123'    
  }
]

app.get('/rest/test', (req, res) => {

  res.json(test)

})


app.get('/rest/:model',async (req,res) =>{
  let model = models[req.params.model] // cats, owners
  let test2 = await model.find()

  res.json(test2)

})

app.listen(3001)
