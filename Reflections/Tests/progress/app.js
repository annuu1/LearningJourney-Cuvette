const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

// Handle GET request to render the form
app.get('/', (req, res) => {
    res.render('index', { title: 'Express App', message: 'Hello, EJS!' });
  });

// Handle POST request to receive form data
app.post('/submit', (req, res) => {
  // Access form data through req.body
  const { username, email } = req.body;
  
  res.send(`Received username: ${username}, email: ${email}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
