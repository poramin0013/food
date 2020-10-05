const express = require('express');
const hbs = require('express-handlebars');
const restaurantRouter = require('./routes/restaurant');

const path = require('path');

//creater Server
const app = express();

/*app.get('/',(req,res) => {
    res.send('<h1>Hello Restaurant API <h1>');

});*/

//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//Middleware เพื่ออ่าน req.body
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))




//router
app.use('/',restaurantRouter);


const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);