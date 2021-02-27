const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
const morgan = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/info",router);
app.use(morgan("dev"));
app.use('/public', express.static('public'))

app.listen(4000,() => {
    console.log("server started");
})


mongoose.connect('mongodb://localhost:27017/ohmfood', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(res=>{
          console.log("DB Connected!")
  }).catch(err => {
    console.log(Error, err.message);
  })

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  }); 