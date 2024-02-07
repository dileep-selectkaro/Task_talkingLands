const express = require('express');
const mongoose = require('mongoose');
const pointRoutes = require('./routes/pointRoutes');
const polygonRoutes = require('./routes/polygonRoutes');
const PORT = 4000;

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/talkingland')

.then(() => {
    console.log('Successfully connected to MongoDB');
    
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api', pointRoutes);
app.use('/api', polygonRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});