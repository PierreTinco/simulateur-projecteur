const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
const angularDistPath = path.join(__dirname, 'app');
app.use(express.static(angularDistPath));

// Send all requests to Angular's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(angularDistPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});