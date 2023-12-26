const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/alpha-labs'; 
const dbName = 'alpha-labs'; 

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToMongoDB();
