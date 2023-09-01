const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const taskRoutes = require('./../routes/tasks');
const authRoutes = require('./../routes/auth');
const _initializePassport = require('./passport.js');
const dotenv = require('dotenv');
const errorHandler = require('./../middleware/errorHandler.js');

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', authRoutes);
app.use('/tasks', taskRoutes);

app.use(errorHandler)

module.exports = app;
