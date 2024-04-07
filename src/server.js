const express = require('express');


require('dotenv').config();

const PORT = process.env.PORT || 3500;

//====== APP ======//
const app = express();

app.use(express.static(__dirname + '/../public'));

//---- EJS ----//
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');

//====== ROUTES ======//
const appRouter = require('./routes/app');
app.use( '/' , appRouter );

app.listen( PORT , () => {
    console.log('----> server connected on port ' + PORT);
});