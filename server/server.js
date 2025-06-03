const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();
connectDB();

const app = express();
const corsOptions = {
  origin: 'https://5173-firebase-perfumeshop-1748926666302.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev', // frontend origin
  credentials: true,
};

app.use(cors(corsOptions));



app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
