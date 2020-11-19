const express = require('express');
const { connect } = require('mongoose');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

//middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server start ${PORT}`);
});
