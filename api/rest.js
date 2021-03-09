
module.exports = (app, models) => {

  // Get all users/houses/rentals
  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    let docs = await model.find()
    res.json(docs)
  })

  // Get houses by filters 
  app.get('/rest/:model/filters/:something', async (req, res) => {
    console.log(req.params.something)
    let filter = JSON.parse(req.params.something)
    console.log(JSON.parse(req.params.something))
    console.log(filter[0])
    let model = models[req.params.model]
    console.log(model)
    let docs = await model.find({ $and: [filter[0], filter[1]]})
    console.log(docs)
    //console.log(req.body)
    // let filterObj = JSON.parse(req.body)
    // console.log(filterObj)
  //   let docs = await houses.find({ featuresId: filterObj })
    res.json(docs)
  })

  // Get user/house/rental by id
  app.get('/rest/:model/:id', async (req, res) => {
    let model = models[req.params.model]
    // Only populate if ref exists?
    let docs = await model.findById(req.params.id).populate(['userId', 'houseId', 'featureIds']).exec()
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


