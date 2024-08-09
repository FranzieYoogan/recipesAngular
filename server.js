const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
var cors = require('cors')
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors())

// MongoDB Connection URI
const uri = 'yourKluster';
const dbName = 'recipes';
let db;

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);
  })
  .catch(err => console.error(err));

// GET all recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await db.collection('recipes').find().toArray();
    res.json(recipes);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET a single item by ID
app.get('/recipes/:id', async (req, res) => {
  try {
    const item = await db.collection('recipes').findOne({ _id: new ObjectId(req.params.id) });
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST a new item
app.post('/recipes', async (req, res) => {
  try {
    const result = await db.collection('recipes').insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT (update) an item by ID
app.put('/recipes/:id', async (req, res) => {
  try {
    const result = await db.collection('recipes').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount > 0) {
      res.json({ message: 'Item updated' });
    } else {
      res.status(404).send('Item not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE an item by ID
app.delete('/recipes/:id', async (req, res) => {
  try {
    const result = await db.collection('recipes').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount > 0) {
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).send('Item not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
