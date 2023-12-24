const express = require('express');
const { connectToMongoDB } = require('./db'); 
const app = express();


// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    console.log('MongoDB connection successful');
    // Start server after successful MongoDB connection
    app.listen(8080, () => {
      console.log('Server running on port 8080');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Test endpoint to check MongoDB connection
app.get('/test-db-connection', async (req, res) => {
  try {
    // Perform a simple query to check if connected
    const db = client.db(); // Assuming 'client' is the MongoDB client object
    const result = await db.command({ ping: 1 });
    res.status(200).json({ message: 'MongoDB connection successful', result });
  } catch (error) {
    console.error('Error testing MongoDB connection:', error);
    res.status(500).json({ message: 'Error testing MongoDB connection', error });
  }
});
