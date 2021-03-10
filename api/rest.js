
module.exports = (app, models) => {

  // Get all users/houses/rentals
  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    let docs = await model.find()
    res.json(docs)
  })

  app.get('/rest/:model/city/:city/', async (req, res) => {
    let city = req.params.city
    let model = models[req.params.model]
    let docs = await model.find({ city: { $regex: '^' + city, $options: 'i' }})
    console.log(docs)
    res.json(docs)
  })

  // Get houses by filters 
  app.get('/rest/:model/filters/:city/', async (req, res) => {
    let bedrooms = parseInt(req.params.bedrooms)
    let country = req.params.country
    let pool = parseInt(req.params.pool)

    console.log(bedrooms)
    console.log(country)
    console.log(pool)
  //   let filter = JSON.parse(req.params.something)
  //   console.log(JSON.parse(req.params.something))
  //   console.log(filter[0])
    let model = models[req.params.model]
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
  



  // Get user/house/rental by id
  app.get('/rest/:model/:id', async (req, res) => {
    let model = models[req.params.model]
    // Only populate if ref exists? answer :yes
    let docs = await model.findById(req.params.id).populate(['userId', 'featureIds']).exec()
    res.json(docs)
  })

  





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


