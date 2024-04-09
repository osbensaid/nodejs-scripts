const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const dbPath = "chinook.db";
const outputPath = "output/data.json";

// Open the connection
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
    return;
  }
  console.log("Connected to the SQLite database.");
});

// Query to fetch data from customers table
const query = "SELECT * FROM customers";

// Execute the query to fetch data
db.all(query, (err, rows) => {
  if (err) {
    console.error("Error running query:", err.message);
    return;
  }

  // Close the database connection
  db.close((err) => {
    if (err) {
      console.error("Error closing database:", err.message);
    }
    console.log("Disconnected from the SQLite database.");

    // Write JSON data to a file
    const jsonData = JSON.stringify(rows, null, 2);
    fs.writeFile(outputPath, jsonData, (err) => {
      if (err) {
        console.error("Error writing JSON file:", err.message);
      } else {
        console.log("JSON data has been saved to data.json.");
      }
    });
  });
});
