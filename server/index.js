const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = 8000;

const CONSTANTS = require('./constants.json')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let db;

(async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
})();


var passport = require('passport');
var LocalStrategy = require('passport-local');

// TODO: Probably make this work one day
// passport.use(new LocalStrategy(function verify(username, password, cb) {
//   db.get('', function(err, user) {
//     if (err) { return cb(err); }
//     if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

//     crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//       if (err) { return cb(err); }
//       if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//         return cb(null, false, { message: 'Incorrect username or password.' });
//       }
//       return cb(null, user);
//     });
//   });
// }));


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${PORT}`)
});

app.get('/login', (req, res) => {
  req.body.email;

  res.send(false);
});

app.get('/universities', async(req, res) => {
  res.send(await getUnis());
});

app.get('/supplimental', async(req, res) => {
  let index = req.query.uniId % 3;
  res.send(CONSTANTS.Supplementals[index]);
});

app.get('/mock', (req, res) => {
  res.send({
    "UniversityID":0,
    "Name":"ERROR",
    "Description":"N/A",
    "Address":["Street","City","Postal Code","Country"],
    "Image":"",
    "WebsiteLink":"#",
    "Logo":"",
    "Programs":["None"],
    "AvgTuition":"N/A",
    "Deposit":"N/A",
    "Email":"N/A",
    "Phone":"123-456-7890"
  });
});

// listen on the port
app.listen(PORT, function () {
    console.info('Express server running on port:', PORT);
});



const getUnis = async () => {
  // await client.connect();
  let unis = await client.db('Ontariapp').collection('Universities').find({}).toArray();
  unis.shift();

  return unis;
}



// Call this function to validate the JWT credential sent from client-side
async function verifyCredentials(credential) {
  const ticket = await Oauth.verifyIdToken({
    idToken: credential,
  })
  const payload = ticket.getPayload()
  return payload
}

verifyCredentials('JWT_CREDENTIAL_STRING_FROM_CLIENT_SIDE').then((userInfo) => {
  // use userInfo and do your server-side logics here
}).catch((error) => {
  // validation failed and userinfo was not obtained
})