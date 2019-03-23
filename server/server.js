const express = require('express');
require('dotenv').config();


const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

// Routes:
const weatherReports = require('./routes/weather-reports.router');
app.use('/weather-reports', weatherReports);

app.listen(port, function() {
    console.log('listening on port', port);
});
