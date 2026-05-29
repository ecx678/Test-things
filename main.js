
const express = require('express');
const cors = require('cors'); // 1. Importera CORS
const app = express();

const { adduser, removeuser, getusers } = require("./variablehandler.js");

app.use(express.json());
app.use(cors()); // 2. Aktivera CORS för alla domäner

// Hämta alla användare
app.get('/users', (req, res) => {
    res.json(getusers());
});

// Lägg till en användare
app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Du måste skicka med ett namn" });
    }
    adduser(name);
    res.status(201).json({ message: `Användare ${name} tillagd` });
});

// Ta bort en användare
app.delete('/users/:name', (req, res) => {
    const name = req.params.name;
    removeuser(name);
    res.json({ message: `Försökte ta bort ${name}` });
});

app.listen(3000, () => {
    console.log('API körs på http://localhost:3000');
});
