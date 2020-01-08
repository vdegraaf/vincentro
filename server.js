const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect databse
connectDB();

// app.get('/', (req, res) => res.json({
//   id: 1,
//   name: 'Vincent',
//   vestiging: 'DXC'
// }))

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/games', require('./routes/games'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
