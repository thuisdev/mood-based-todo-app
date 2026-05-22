const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/api/weather', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        const url =
            `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}`;

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Weather fetch failed' });
    }
});

module.exports = app;