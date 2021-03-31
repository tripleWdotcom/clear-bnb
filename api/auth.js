
const crypto = global.crypto;
const session = global.session;
const ConnectMongo = global.ConnectMongo

module.exports = (app, models, dbCloudUrl) => {
  const User = models['users']
  const salt = '5weetS4lt';
  // session middleware
  app.use(session({
    secret: '5ecre754l7', // choose your own...
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: ConnectMongo.create({ mongoUrl: dbCloudUrl })
  }));


  // Route to register a user
  app.post('/api/users', async (req, res) => {
    // Encrypt password

    const duplicateEmail = await models['users'].find({ email: req.body.email })

    if (duplicateEmail.length > 0) {
      res.json({ error: 'Email already in use' });
      return;
    }

    console.log('Im adding a user anyways')

    const hash = crypto.createHmac('sha256', salt)
      .update(req.body.password).digest('hex');
    // Create new user
    let user = new models['users']({ ...req.body, password: hash });
    
    await user.save();
    res.json(user)
  
  });


  // Login

  app.post('/api/login', async (req, res) => {
    // note: req.session is unique per user/browser
    if (req.session.user !== undefined && req.session.user.length > 0) {
      console.log('Someone is already logged in')
      res.json(req.session.user);

      return;
    }
    // Encrypt password

    const hash = crypto.createHmac('sha256', salt)
      .update(req.body.password).digest('hex');
    // Search for user
    let user = await User.find({ $and: [{ email: req.body.email }, { password: hash }] })
    if (user.length > 0) {
      // succesful login, save the user to the session object
      req.session.user = user;
      res.json(req.session.user);
    }
    else {
      res.json({ error: 'No match.' });
    }

  });

  // Logout
  app.delete('/api/login', (req, res) => {
    if (req.session.user) {
      delete req.session.user;
      res.json({ success: 'Logged out' });
    }
    else {
      res.json({ error: 'Was not logged in' });
    }
  });

  // Check if logged in

  app.get('/api/login', (req, res) => {
    console.log('is there a user in session?', req.session.user)
    if (req.session.user !== undefined && req.session.user.length > 0 ) {
      let user = { ...req.session.user };
      console.log('who is the user', user)
      delete user[0].password; // remove password in answer
      res.json(user);
    }
    else {
      res.json({ error: 'Not logged in' });
    }
  });


}