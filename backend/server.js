// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Import the File System module
const path = require('path'); // Import the Path module

const app = express();
const PORT = 3001;

app.use(cors());

const dataFilePath = path.join(__dirname, 'data.json');

// Endpoint for a single intern's data (for the dashboard)
// We'll just return the first user to simulate a logged-in user
app.get('/api/intern-data', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData[0]); // Send back the first intern
  });
});

// BONUS: Endpoint for the leaderboard
app.get('/api/leaderboard', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    const jsonData = JSON.parse(data);
    // Sort the data by donationsRaised in descending order
    const sortedData = jsonData.sort((a, b) => b.donationsRaised - a.donationsRaised);
    res.json(sortedData);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});