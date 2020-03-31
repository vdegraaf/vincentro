const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect databse
connectDB();

// Body parser to get access to req body
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/games', require('./routes/games'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
