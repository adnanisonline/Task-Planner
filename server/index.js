const app = require('./config/app'); // Import the Express app
const db = require('./config/db');   // Import the database connection

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
