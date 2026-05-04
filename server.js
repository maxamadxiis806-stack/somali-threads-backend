const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

  const products = [
  { id: 1, name: "Classic Hoodie", price: 45, image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400" },
  { id: 2, name: "Heritage Tee", price: 25, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 3, name: "Urban Jacket", price: 85, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server running!');
});
