const express = require('express');
const request = require('../utils/myRequest');

require('dotenv').config();

const PORT = process.env.PORT || 3500;

//====== APP ======//

const app = express();

app.use(express.static(__dirname + '/../public'));

//---- EJS ----//
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');
//--------------

app.get('/', async (req, res) => {

    const city = req.query.city;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + process.env.API_KEY;
    const data = await request.get(url);

    if (city && city != "" && data.cod == 200) {
        res.render('showWeather',
            {
                default_input_text: city,
                city_name: data.name ,
                temperature: data.main.temp || 0 ,
                weather_name: data.weather[0].main
            });
    } else {
        res.render('index');
    }





});

app.listen( PORT , () => {
    console.log('----> server connected on port ' + PORT);
});