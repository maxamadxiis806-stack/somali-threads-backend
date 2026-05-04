const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Classic Hoodie", price: 45 },
  { id: 2, name: "Heritage Tee", price: 25 },
  { id: 3, name: "Urban Jacket", price: 85 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server running!');
});
