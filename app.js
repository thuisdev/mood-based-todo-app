const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static("public"));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

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

app.listen(process.env.PORT, console.log("Server is running"));