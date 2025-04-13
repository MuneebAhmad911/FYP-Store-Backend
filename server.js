const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');

// Importing route files
const authRoutes = require('./Routes/authRoute');
const productRoutes = require('./Routes/productRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const disputeRoutes = require('./Routes/disputeRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Additional Routes for Testing
app.get('/hello', (req, res) => {
  res.send('Hello from the /hello route!');
});

app.get('/products', (req, res) => {
    res.json([
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
    ]);
  });

// Main API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/disputes', disputeRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});