const http = require("http");
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data

const tables = [];
const reservations = [];

// routes

//index
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//tables
app.get('/api/tables', (req, res) => res.json(tables));

//reservations 
app.get('/api/reservations', (req, res) => res.json(reservations));

//POST reservation
app.post('/api/reservations', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);
  
    reservations.push(newReservation);
    res.json(newReservation);
});

// listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));