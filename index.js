const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');
const http=require('http');
const db=require('./Config/database.js');
const url = require('url');
const querystring = require('querystring');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
db.clientconnection;
//app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  var userrouter=require('./Routes/user_routes');
  var orderrouter=require('./Routes/order_routes');
  var ingredientrouter=require('./Routes/order_routes');
  var foodrouter=require('./Routes/food_routes');
  app.use('/user',userrouter);
  app.use('/order',orderrouter);
  app.use('/ingredients',ingredientrouter);
  app.use('/food',foodrouter);
  app.use(function(req,res,next){
    const queryObject = url.parse(req.url,true).query;
   // res.locals.session = req.session;
    next();
  });
//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {

//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
  
//     res.render('error');
//     /* res.json({
//       message: err.message,
//       error: err
//     }); */
  
//   });
  app.listen(port, () => console.log(` app is listening on port ${port}!`));
  
  module.exports = app;