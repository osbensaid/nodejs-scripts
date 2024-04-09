# SQLite to JSON Converter

This Node.js script queries data from an SQLite database and saves it as JSON format.

### Prerequisites

1. Node.js installed on your machine
2. SQLite database file (e.g., chinook.db) with the data you want to query

### Installation

1. Clone this repository.
2. Install the required Node.js modules.
   > npm install

### Usage

1. Ensure your SQLite database file (chinook.db in this example) is accessible and contains the data you want to query.
2. Open the index.js file and update the following variables based on your database and desired output location:
   > const dbPath = "path/to/your/database.db";<br>const outputPath = "path/to/output/data.json";
3. Run the script using Node.js:
   > node index.js
4. Once executed, the script will query the specified data from the SQLite database and save it as JSON to the specified output file (data.json).

### Author

Created by Oussama Bensaid

### License

This project is licensed under the MIT License.
