const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
require('dotenv').config();
const numOfSaltRounds = 12;
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
  }).catch(error => {
    console.log('-------------- error', error);
  });

  app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }));
  app.use(express.static(`${__dirname}/../build`));

const port = 4000;
app.listen(port, () => {console.log(`server is listening on ${port}`)})


app.delete('/api/animal/:id', (req, res) => {
   const db = req.app.get('db');
   db.delete_animals(req.params.id)
   .then(data => {res.status(200).send(data)})
   .catch(err => {console.log(err)
  res.status(500).send('there was an error')})
})
app.get(`/api/animal`, (req, res) => {
  const db = req.app.get('db');
  db.select_animals(req.query.id)
  .then(data => {res.status(200).send(data)})
  .catch(err => {console.log(err)
  res.status(500).send('there was an error')})
})

app.post('/register', (req, res) => {
  const db = app.get('db');
  const { username, password } = req.body;
  bcrypt.hash(password, numOfSaltRounds).then(hashedPassword => {
    db.create_user([username, hashedPassword]).then(() => {
      req.session.user = { username };
      res.json({ user: req.session.user })
    }).catch(error => {
      console.log('error', error);
      res.status(500).json({ message: 'Something bad happened! '})
    });
  });
})

app.post('/login', (req, res) => {
  const db = app.get('db');
  const { username, password } = req.body;
  db.find_user([username]).then(users => {
    if (users.length) {
      bcrypt.compare(password, users[0].password).then(passwordsMatched => {
        if (passwordsMatched) {
          req.session.user = { username: users[0].username };
          res.json({ user: req.session.user });
        } else {
          res.status(403).json({ message: 'Wrong password' })
        }
      })} else {
        res.status(403).json({ message: "That user is not registered" })
      }}
  )});
  
      

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).send();
});

function ensureLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(403).json({ message: 'You are not authorized' });
  }
}

app.get('/secure-data', ensureLoggedIn, (req, res) => {
  res.json({ someSecureData: 123 });
});