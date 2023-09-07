const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});