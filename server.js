const http = require("http");
const express = require('express');
const { table } = require("console");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data

const tables = [
    {
        num: 1,
        seats: 4,
        reserved: false,
    }
];
const reservations = [];

const waitlist = [];

// routes

//index
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

//tables 
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

//reserve
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

//tables
app.get('/api/tables', (req, res) => res.json(tables));

//reservations 
app.get('/api/reservations', (req, res) => res.json(reservations));

//POST table
app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newTable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.num.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
  
    tables.push(newTable);
    res.json(newTable);
});

//POST reservation
app.post('/api/reservations', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);

    let space;
    for (table in tables) {
        if (table.reserved === false) {
            space = true;
            newReservation.table = table.num;
            return;
        } else {
            space = false;
        }
    }

    if (space) {
        reservations.push(newReservation);
    } else {
        waitlist.push(newReservation)
    }
  

    res.json(newReservation);
});

// listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));