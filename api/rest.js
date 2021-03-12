
module.exports = (app, models) => {

  // Get all users/houses/rentals
  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    let docs = await model.find()
    res.json(docs)
  })

  app.get('/rest/houses/city', async (req, res) => {
    let city = req.body.city
    let model = models['houses']
    let docs = await model.find({ city: { $regex: '^' + city, $options: 'i' }})
    res.json(docs)
  })

  // Get houses by filters 
  app.get('/rest/houses/filters', async (req, res) => {
    console.log(req.body)
    // let bedrooms = parseInt(req.body.bedrooms)
    // let country = req.params.country
    // let pool = parseInt(req.params.pool)

    // console.log(bedrooms)
    // console.log(country)
    // console.log(pool)
  //   let filter = JSON.parse(req.params.something)
  //   console.log(JSON.parse(req.params.something))
  //   console.log(filter[0])
    let model = models['houses']
  //   console.log(model)
    let docs = await model.find({featureIds: '6046bf371807457c80418887'}).populate('featureIds').count()
    //let docs = await model.find({ country: country })
    //let docs = await model.find({ $and: [{ bedrooms: { $lt: bedrooms }, country: country}]})
  //   console.log(docs)
  //   //console.log(req.body)
  //   // let filterObj = JSON.parse(req.body)
  //   // console.log(filterObj)
  // //   let docs = await houses.find({ featuresId: filterObj })
    console.log(docs)
    res.json(docs)
  })

  // 3001 / rest / houses / filters / [{ "bedrooms": 4 }]
  // 3001 / rest / houses / filters / bedrooms / :bedrooms / wifi / :wifi / parking /:parking
  //   let bedrooms = req.params.bedrooms
  //   let wifi = req.params.wifi
  //   let parking = req.params.parking
  
  
  // 3001 / rest / houses / filters / { "bedrooms": 4, "wifi": true }
  // filter.bedrooms
  // filter.wifi
  // filter.parking
  

  // Get users houses by userId
  app.get('/rest/houses/user/:id', async (req, res) => {
    let model = models['houses']
    console.log('model', model)
    console.log(await model.find({ userId: req.params.id }))
    let docs = await model.find({ userId: req.params.id }).populate(['userId', 'featureIds']).exec()
    res.json(docs)
  })

  // Get users bookings by userId
  app.get('/rest/bookings/user/:id', async (req, res) => {
    let model = models['bookings']
    let docs = await model.find({ userId: req.params.id }).populate(['userId', 'houseId']).exec()
    res.json(docs)
  })

  // Add a new house
  app.post('/rest/houses', async (req, res) => {
    let model = models['houses']
    let doc = req.body
    let docs = await new model(doc)
    await docs.save()
    res.json(docs)
  })

  // Add a new booking
  app.post('/rest/bookings', async (req, res) => {
    let model = models['bookings']
    let doc = req.body
    let docs = await new model(doc)
    await docs.save()
    res.json(docs)
  })

  // Delete house 
  app.delete('/rest/houses', async (req, res) => {
    let houseId = req.body
    let house = await models['houses'].remove({ _id: houseId.id })
    res.json(house)
  })

  // Delete booking
  app.delete('/rest/bookings', async (req, res) => {
    let bookingId = req.body
    let booking = await models['bookings'].remove({ _id: bookingId.id })
    res.json(booking)
  })











  // Get user/houses by userId
  // app.get('/rest/:model/user/:id', async (req, res) => {
  //   let model = models[req.params.model]
  //   // Only populate if ref exists? answer :yes
  //   let docs = await model.find({ userId: req.params.id }).populate(['userId', 'featureIds']).exec()
  //   res.json(docs)
  // })


  
  
}


