const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8000;

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID")


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${PORT}`)
});

// listen on the port
app.listen(PORT, function () {
    console.info('Express server running on port:', PORT);
});

// Call this function to validate the JWT credential sent from client-side
async function verifyCredentials(credential) {
  const ticket = await client.verifyIdToken({
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