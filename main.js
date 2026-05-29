
const express = require('express');
const app = express();

// Importera dina funktioner från variablehandler.js
const { adduser, removeuser, getusers } = require("./variablehandler.js");

// Gör så att Express kan läsa JSON i POST-anrop
app.use(express.json());

// 1. Hämta alla användare (Returnerar arrayen)
app.get('/users', (req, res) => {
    res.json(getusers());
});

// 2. Lägg till en användare via namn
app.post('/users', (req, res) => {
    const { name } = req.body; // Hämtar namnet från JSON-bodyn
    
    if (!name) {
        return res.status(400).json({ error: "Du måste skicka med ett namn" });
    }

    adduser(name);
    res.status(201).json({ message: `Användare ${name} tillagd` });
});

// 3. Ta bort en användare via namn
app.delete('/users/:name', (req, res) => {
    const name = req.params.name; // Hämtar namnet direkt från URL:en
    
    removeuser(name);
    res.json({ message: `Försökte ta bort ${name}` });
});

// Starta servern
app.listen(3000, () => {
    console.log('API körs på http://localhost:3000');
});
