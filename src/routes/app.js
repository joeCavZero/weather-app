const express = require('express');
const request = require('../../utils/myRequest');

const router = express.Router();

router.get('/', async (req, res) => {
    const city = req.query.city;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + process.env.API_KEY;
    const data = await request.get(url);

    if (city && city != "" && data.cod == 200) {
        res.render('showWeather',
            {
                default_input_text: city,
                city_name: data.name ,
                temperature: data.main.temp ,
                weather_name: data.weather[0].main
            });
    } else {
        res.render('index');
    }

});


module.exports = router;