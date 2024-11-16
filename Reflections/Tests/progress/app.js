const axios = require("axios");
const express = require("express");
require("dotenv").config();

// Access environment variables
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const baseURL = process.env.UPSTOX_BASE_URL;
const accessToken = process.env.UPSTOX_ACCESS_TOKEN;

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// to get the forms data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//to use the static files like css and js or imgs
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", {title:"hello", message:"hello"});
});

// Handle GET request to render the form
app.get("/login", (req, res) => {
  const authorizationUrl = `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${apiKey}&redirect_uri=${redirectURI}`;
  console.log(authorizationUrl);
  res.redirect(authorizationUrl);
});

app.get("/upstox/code",(req, res)=>{
    const url = "https://api.upstox.com/v2/login/authorization/token"
    const authorizationCode = req.query.code;
    if (!authorizationCode) {
      return res.status(400).json({ error: 'Authorization code is missing' });
    }
    const searchParams = new URLSearchParams({
      code: authorizationCode,
      client_id: apiKey,
      client_secret: apiSecret,
      redirect_uri: redirectURI,
      grant_type: 'authorization_code'
    });

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
    axios.post(url, searchParams, {headers: headers})
    .then((response)=>{
      const { access_token, refresh_token, profile } = response.data;
      console.log('Access Token:', access_token);
            console.log('Refresh Token:', esponse.data);
            console.log('User Profile:', profile);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    })
  })
  
app.get("/upstox/profile", (req, res) => {
  const url = `${baseURL}/user/profile`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  axios
    .get(url, { headers })
    .then((response) => {
      console.log(response.data);
      res.json(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});









// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
