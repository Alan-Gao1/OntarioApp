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
  console.log("getting universities")
  res.send(await getUnis());
});

app.get('/supplimental', (req, res) => {
  let index = req.query.uniId % 3;
  res.send(CONSTANTS.Supplementals[index]);
});

app.get('/user', async(req, res) => {
  let email = req.query.userEmail;

  if (!email) return res.send({});
  
  let user = await client.db('Ontariapp').collection('Students').findOne({"Email": email});

  console.info(`reading ${email}: \n${user}`)

  if (user == undefined) {
    user = CONSTANTS.baseStudent;
    user.Email = email;
    await client.db('Ontariapp').collection('Students').insertOne(user);
    res.send(user);
  } else {
    res.send(user);
  }
});

app.post('/updateuser', async(req, res) => {
  let newUser = req.body.newUser;

  delete newUser._id;

  await client.db('Ontariapp').collection('Students').updateOne(
    { "Email": newUser.Email },
    { $set: newUser }
  );

  res.send(req.body);
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