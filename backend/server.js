const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const usersCollection = db.collection('admin');

    const newUser = req.body; // Assuming user data is sent in the request body

    const result = await usersCollection.insertOne(newUser);
    res.status(201).json({ message: 'User inserted', userId: result.insertedId });
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).json({ message: 'Failed to insert user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
