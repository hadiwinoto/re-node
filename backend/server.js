const express = require("express");
const bodyParser = require("body-parser");
const { authJwt } = require('./app/middleware');
const app = express();
const db = require("./app/models");
const role = db.role;
const cors = require('cors');
require('dotenv').config()

// db.connectMysql.sync({force: true}).then(() => {
//   console.log('Drop and ReSync');
//   initial();
// });

db.connectMysql.sync();

function initial() {
  role.create({
    id: 1,
    name: "user"
  });
  role.create({
    id: 2,
    name: "moderator"
  });
  role.create({
    id: 3,
    name: "admin"
  });
}
var corsOptions = {
  origin: "http://localhost:8081"
  // origin: "https://database.rhr.co.id"
  
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({limit:'500mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", corsOptions.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Content-Type, Accept");
    next();
})

// simple route
app.get('/api',cors(corsOptions),function (req, res) {
  res.json({
    'message':'Welcome To Joblist Application RESTfull API'
  });
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/profile.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});