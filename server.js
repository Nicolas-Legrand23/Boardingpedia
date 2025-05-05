// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS to allow frontend cross-origin requests

// Create a connection pool to your MySQL database
const pool = mysql.createPool({
    host: '127.0.0.1',  // Change from 'localhost' to '127.0.0.1'
    port: 3306,         // Explicitly set the port to 3306
    user: 'root',       // Update with your MySQL username
    password: 'root',   // Update with your MySQL password
    database: 'boardingpedia'
  });
  

// Endpoint to fetch review counts per game using the view "reviews_count_per_game"
app.get('/review-counts', (req, res) => {
  pool.query('SELECT * FROM reviews_count_per_game', (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// You can add more endpoints here if needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
