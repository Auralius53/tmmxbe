const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Read items from items.json
let items = [];
fs.readFile('items.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading items.json:', err);
        return;
    }
    items = JSON.parse(data);
});

// API endpoint to get items
app.get('/api/items', (req, res) => {
    res.json(items);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
