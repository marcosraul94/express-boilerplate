const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
