const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});

module.exports = app;