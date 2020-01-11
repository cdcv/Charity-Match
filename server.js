//Necessary dependencies---------------------------------------------------------
const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const mysql = require('mysql');
var db = require("./models");
const multer = require("multer");
const cors = require("cors");
const users = require("./routes/api/users");
app.use("/api/users", users);
//Necessary dependencies---------------------------------------------------------

// Bodyparser middleware---------------------------------------------------------
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Bodyparser middleware---------------------------------------------------------

// Passport middleware and config------------------------------------------------
app.use(passport.initialize());
require("./config/passport")(passport);
// Passport middleware and config------------------------------------------------

//Allows user to upload images using Multer & CORS-------------------------------
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage })

app.use(cors());

app.post('/upload', upload.single('image'), (req, res) =>{
  if(req.file)
    res.json({
     imageUrl: `images/uploads/${req.file.filename}`
    });
   else
     res.status("409").json("No Files to Upload."); 
});
//Allows user to upload images using Multer & CORS-------------------------------

//Connects to MySQL database and JawsDB on Heroku--------------------------------
const connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'password',
  database: 'userData'
  });
  
  connection.connect(function(err){
    (err)? console.log(err): console.log('Connected.');
  });

  if (process.env.JAWSDB_URL === "production") {
    app.use(express.static("client/build"));
  }
//Connects to MySQL database and JawsDB on Heroku--------------------------------
  
// Routes------------------------------------------------------------------------
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  
  app.get('/secure', authenticationRequired, (req, res) => {
    res.json(req.jwt);
  });
// Routes------------------------------------------------------------------------

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  });
  