const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './Develop/public')));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);