
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
    let docs = await model.find({ city: { $regex: '^' + city, $options: 'i' } })
    res.json(docs)
  })

  // Get houses by filters 
  app.get('/rest/houses/filters', async (req, res) => {
    let b = req.body

    // Feature filters
    let featureIds = []
    b.wifi == null ? null : featureIds.push({ featureIds: b.wifi })
    b.tv == null ? null : featureIds.push({ featureIds: b.tv })
    b.breakfast == null ? null : featureIds.push({ featureIds: b.breakfast })
    b.gym == null ? null : featureIds.push({ featureIds: b.gym })
    b.kitchen == null ? null : featureIds.push({ featureIds: b.kitchen })
    b.smoking == null ? null : featureIds.push({ featureIds: b.smoking })
    b.animalFriendly == null ? null : featureIds.push({ featureIds: b.animalFriendly })
    b.pool == null ? null : featureIds.push({ featureIds: b.pool })
    b.parking == null ? null : featureIds.push({ featureIds: b.parking })

    console.log(featureIds)

    let model = models['houses']
    //   console.log(model)

    let unixTimestamp = Math.floor(new Date().getTime())
    console.log(unixTimestamp)
    //let timeStamp = b.availableEnd <= unixTimestamp ? unixTimestamp : b.availableEnd

    let docs = await model.find(
      { availableEnd: b.availableEnd}
    )
    console.log(docs)
    console.log(docs.map(m => m.availableEnd))
    res.json(docs)
    return;
    

    if (!featureIds.length) {
      // Without any checkbox filters
      let docs = await model.find({
        $and: [
          { $and: [{ bedrooms: { $lte: b.bedroomsMax } }, { bedrooms: { $gte: b.bedroomsMin } }] },
          { $and: [{ price: { $lte: b.priceMax } }, { price: { $gte: b.priceMin } }] },
          { city: b.city },
        ]
      }).populate(['userId', 'featureIds']).exec()
      console.log(docs)
      res.json(docs)
      return;
    } else {
      // With checkbox filters
      let docs = await model.find({
        $and: [
          { $and: [{ bedrooms: { $lte: b.bedroomsMax } }, { bedrooms: { $gte: b.bedroomsMin } }] },
          { $and: [{ price: { $lte: b.priceMax } }, { price: { $gte: b.priceMin } }] },
          { city: b.city },
          { $and: featureIds },
        ]
      }).populate(['userId', 'featureIds']).exec()
      console.log(docs)
      res.json(docs)
      return;
    }
    
    // Why doesnt the dates work

    // { availableStart: { $gte: b.availableStart } }
    // { availableEnd: { $lte: b.availableEnd } },
    
  })

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









  // // load models
  // let wifi = new models['features']({
  //   index: 1,
  //   name: 'wifi'
  // })

  // //wifi.save()

  // const test = [
  //   {
  //     id: 1,
  //     name: 'jack',
  //     number: '123'
  //   }
  // ]

  // app.get('/rest/test', (req, res) => {

  //   res.json(test)

  // })


  // app.get('/rest/:model', async (req, res) => {
  //   let model = models[req.params.model] // cats, owners
  //   let test2 = await model.find()

  //   res.json(test2)

  // })





}


