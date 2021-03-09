

module.exports = (app, dbCloudUrl, models) => {

  // Get all users/houses/rentals
  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    let docs = await model.find()
    res.json(docs)
  })
  
  // Get houses by filters 
  app.get('/api/houses/:filters', async (req, res) => {
    let filterObj = JSON.parse(req.body)
    let docs = await houses.find({ featuresId: filterObj })
    res.json(docs)
  })

  // Get user/house/rental by id
  app.get('/rest/:model/:id', async (req, res) => {
    let model = models[req.params.model]
    // Only populate if ref exists?
    let docs = await model.findById(req.params.id).populate(['userId', 'houseId', 'bookingId', 'featureIds']).exec()
    res.json(docs)
  })

 


  // load models
  let wifi = new models['features']({
    index: 1,
    name: 'wifi'
  })

  //wifi.save()

  const test = [
    {
      id: 1,
      name: 'jack',
      number: '123'
    }
  ]

  app.get('/rest/test', (req, res) => {

    res.json(test)

  })


  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model] // cats, owners
    let test2 = await model.find()

    res.json(test2)

  })





}


