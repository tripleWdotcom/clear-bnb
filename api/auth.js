
const crypto =global.crypto;
const session = global.session;
const ConnectMongo = global.ConnectMongo

module.exports = (app,models,dbCloudUrl) => {
const User = models['users']
const secret = '5weetS4lt';
// session middleware
app.use(session({
  secret: 'very secret one', // choose your own...
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: ConnectMongo.create({ mongoUrl: dbCloudUrl })
}));


// Route to register a user
  app.post('/api/users', async (req, res) => {
  // Encrypt password
  const hash = crypto.createHmac('sha256', secret)
    .update(req.body.password).digest('hex');
  // Create new user
  let user = new models['users']({ ...req.body, password: hash });
  // NOTE: This system is unsafe since you can 
  // choose your own role on registration!
  await user.save();
  res.json(user)
  // res.json({ success: true });
});


// Login

  app.post('/api/login', async (req, res) => {
  // note: req.session is unique per user/browser
    if (req.session.user) {
    console.log('Someone is already logged in')
    res.json({ error: 'Someone is already logged in' });

    return;
  }
  // Encrypt password

  const hash = crypto.createHmac('sha256', secret)
    .update(req.body.password).digest('hex');
  // Search for user
    let user = await User.find({ username: req.body.email, password: hash });
  if (user) {
    // succesful login, save the user to the session object
    req.session.user = user;
    console.log('session user', req.session.user)
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
  if (req.session.user) {
    let user = { ...req.session.user };
    delete user[0].password; // remove password in answer
    res.json(user);
  }
  else {
    res.json({ error: 'Not logged in' });
  }
});

// Example rotues and roles - ACL Access Control List

app.get('/api/bird-admin-page', (req, res) => {

  if (req.session.user && req.session.user.role === 'bird admin') {
    res.json({ secret: 'The secret data, only for bird admins.' })
  }
  else {
    res.json({ error: 'No rights to see this route!' });
  }
});
// Example rotues and roles - ACL Access Control List
app.get('/api/cat-admin-page', (req, res) => {
  if (req.session.user && req.session.user.role === 'cat admin') {
    res.json({ secret: 'The secret data, only for cat admins.' })
  }
  else {
    res.json({ error: 'No rights to see this route!' });
  }
});
}