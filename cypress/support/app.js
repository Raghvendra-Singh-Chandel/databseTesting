
const {createPool} = require('mysql2')
const fs = require('fs');
const path = require('path')
const pool = createPool({
  host: "localhost",
  user: 'root',
  password: 'Test@12345',
  database: "testDataBase",
  connectionLimit: 10

})

function returnColumnHeader() {
  pool.query(`SELECT * FROM users`, (err, result, fields) => {
    if (err) {
      console.error(err);
    } else {
      const dataAsObject = {}; // Initialize an empty object

      // Convert the result to a dictionary format
      result.forEach((row) => {
        // Assuming there's a unique identifier like 'id' as the key
        dataAsObject["row"+row.id] = {
          username: row.username,
          password: row.password,
          email: row.email,
        };
      });
      const jsonData = JSON.stringify(dataAsObject, null, 2); // Convert the object to JSON format
      fs.writeFileSync('cypress/fixtures/result.json', jsonData); // Save JSON data to a file
    }
  });
}
returnColumnHeader();

module.exports = {returnColumnHeader}


