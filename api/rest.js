
module.exports = (app, models) => {

  // Get all users/houses/rentals
  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    let docs = await model.find()
    res.json(docs)
  })



    app.get('/rest/houses/ccity/:city', async (req, res) => {
      let city = req.params.city
      let model = models['houses']
      let docs = await model.find({ city: { $regex: '^' + city, $options: 'i' } }).populate('featureIds')
      res.json(docs)
    })


  // Get houses by city (searching for one letter at a time or all citys distinct)
  app.get('/rest/houses/city/:city', async (req, res) => {
    let city = req.params.city
    let model = models['houses']
    if (!city) {
      let docs = await model.find({ city: { $regex: '^' + city, $options: 'i' } })
      res.json(docs)
      return;
    }
    let docs = await model.aggregate([{
      $group: {
        _id: "$city",
        country: {  
          $first: "$country",
        }
      }
    },
    {
      $sort: { _id: 1 }
      }])
    res.json(docs)
  })

  // Get houses by filters 
  app.get('/rest/houses/filters/:filters', async (req, res) => {
    let b = JSON.parse(req.params.filters)

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

    let model = models['houses']

    let unixTimestamp = Math.floor(new Date().getTime())

    if (!featureIds.length) {
      // Without any checkbox filters
      let docs = await model.find({ 
        $and: [
          { $and: [{ bedrooms: { $lte: b.bedroomsMax } }, { bedrooms: { $gte: b.bedroomsMin } }] },
          { $and: [{ price: { $lte: b.priceMax } }, { price: { $gte: b.priceMin } }] },
          { $and: [{ availableEnd: { $gt: unixTimestamp } }, { availableEnd: { $gt: b.availableEnd } }] },
          { $and: [{ availableStart: { $lt: unixTimestamp } }, { availableStart: { $lt: b.availableStart } }] },
          { city: b.city }
        ]
      }).populate(['userId', 'featureIds']).exec()
      res.json(docs)
      return;
    } else {
      // With checkbox filters
      let docs = await model.find({
        $and: [
          { $and: [{ bedrooms: { $lte: b.bedroomsMax } }, { bedrooms: { $gte: b.bedroomsMin } }] },
          { $and: [{ price: { $lte: b.priceMax } }, { price: { $gte: b.priceMin } }] },
          { $and: [{ availableEnd: { $gt: unixTimestamp } }, { availableEnd: { $gt: b.availableEnd } }] },
          { $and: [{ availableStart: { $lt: unixTimestamp } }, { availableStart: { $lt: b.availableStart } }] },
          { city: b.city },
          { $and: featureIds }
        ]
      }).populate(['userId', 'featureIds']).exec()
      res.json(docs)
      return;
    }
  })

  // Get users houses by userId
  app.get('/rest/houses/user/:id', async (req, res) => {
    let model = models['houses']
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
  app.delete('/rest/houses/:id', async (req, res) => {
    let houseId = req.params.id
    let house = await models['houses'].remove({ _id: houseId })
    res.json(house)
  })

  // Delete booking
  app.delete('/rest/bookings/:id', async (req, res) => {
    let bookingId = req.params.id
    let booking = await models['bookings'].remove({ _id: bookingId })
    res.json(booking)
  })

}


